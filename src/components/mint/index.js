import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Wallet from "../../components/wallet";

const NftImage = '/images/PicsArt_01-20-04.44.33.png';

class NftMint extends React.Component {

    constructor(props) {
        super(props);
        this.addMintNumber = this.addMintNumber.bind(this);
        this.subMintNumber = this.subMintNumber.bind(this);
        // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
            value: 3
        };
    }

    addMintNumber (e) {
        let mintNum = this.state.value + 1;
        this.setState({value : mintNum});
    }

    subMintNumber (e) {
        let mintNum = this.state.value - 1;
        if (mintNum < 1) {
            mintNum = 1;
        }
        this.setState({value : mintNum});
    }
    
    render() {
        return (
            <Container>
                <div className="title text-center">
                    <div className="title-big splitAnim" data-aos="fade-up" data-aos-duration="2000">NFT Mint</div>
                    <h2 className="splitAnim" data-aos="fade-up" data-aos-duration="2000">NFT Mint</h2>
                </div>
                <div className="nftmint-list" data-aos="fade-up" data-aos-duration="2000">
                    <Wallet />
                    <Row className="mint-row">
                        <Col lg={5}>
                            <div className="mint-image" data-aos="fade-right" data-aos-duration="2000">
                                <img src={NftImage} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} className="mint-col">
                            <div className="mint-amount-col">
                                <Button variant="success" className="mint-number-button" onClick={this.subMintNumber}> - </Button>
                                <input className="mint-amount-input" type="number" pattern="[0-9]*" value={this.state.value} min={1} disabled />
                                <Button variant="success" className="mint-number-button" onClick={this.addMintNumber}> + </Button>
                            </div>
                        </Col>
                        <Col lg={3} className="mint-col" style={{marginBottom:"20px"}}>
                            <Button variant="success">Mint Now</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default NftMint;