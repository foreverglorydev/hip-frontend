import React from 'react';
import { Container, Button } from 'react-bootstrap';
// import { ethers } from "ethers";

class Wallet extends React.Component {

    constructor(props) {
        super(props);
        // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
            connected: false,
            buttonText: "use-wallet",
            address: "",
        };
    }

    connectWalletHandler = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          alert("Please install Metamask!");
        }
    
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          this.setState({value : accounts[0], buttonText: "Connected"});
        } catch (err) {
          console.log(err)
        }
    }

    render() {
        return (
            <Container>
                <div className="connect-wallet">
                    <Button variant="success" onClick={this.connectWalletHandler}>{this.state.buttonText}</Button>
                    <p style={{marginTop:"15px"}}>{this.state.address}</p>
                </div>
            </Container>
        );
    }
}

export default Wallet;