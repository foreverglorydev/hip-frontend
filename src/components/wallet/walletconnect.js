import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Modal from 'react-modal'
import { wallets } from './constants'
import { useState, useContext, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnector, bsc } from '../../utils/connector'

const Cancel = 'images/cancel.svg'

const WalletConnect = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '20%',
      height: '500px',
      borderRadius: '15px',
      background: 'rgba(0, 0, 0, 0.95)',
      paddingTop: '10px',
      minWidth:'250px', 
    },
  }

  Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.6)'

  const [isOpen, setOpen] = useState(false)
  const { account, activate, deactivate } = useWeb3React()

  const walletModalOpen = async () => {
    setOpen(true)
  }

  const walletDisconnect = async () => {
    console.log('asd')
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setOpen(false)
  }

  const handleLogin = (wname) => {
    if (wname === 'Wallet Connect') { 
      console.log('asdad');
      activate(walletconnector)
    } else if (wname === 'Binance Wallet') {
      activate(bsc)
    } else {
      activate(injected)
    }
    setOpen(false)
  }

  return (
    <>
      <Container>
        {!account ? (
          <div className="connect-wallet" onClick={walletModalOpen}>
            Connect
          </div>
        ) : (
          <div className="connect-wallet" onClick={walletDisconnect}>
            {account.slice(5)}
          </div>
        )}
      </Container>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        closeModal={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <div style={{ borderBottom: '1px solid silver', padding: '3px' }}>
          <img
            src={Cancel}
            style={{
              background: 'transparent',
              width: '25px',
              color: 'white',
              border: '0',
              float: 'right',
            }}
            onClick={closeModal}
          />
          <br />
          <br />
          Connect Wallet
        </div>
        <br />
        {wallets.map((wallet) => (
          <div
            key={wallet.name}
            className="wallet-modal__list__item"
            onClick={() => handleLogin(wallet.name)}
          >
            <font className="font-size-14">{wallet.name}</font>
            <img src={wallet.icon} alt={wallet.name} />
          </div>
        ))}
      </Modal>
    </>
  )
}

export default WalletConnect
