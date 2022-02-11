import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
                    <Row style={{marginTop:"50px", display:"flex"}}>
                        <Col lg={5}>
                            <div className="mint-image" data-aos="fade-right" data-aos-duration="2000" style={{marginBottom:"20px"}}>
                                <img src={NftImage} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{alignSelf:"center", textAlign:"center"}}>
                            <div style={{display:"inline-flex", alignItems:"center", marginBottom:"20px", marginLeft:"23%"}}>
                                <input type="number" pattern="[0-9]*" value={this.state.value} min={1} disabled style={{width:"50%", fontSize:"30px"}} />
                                <Button variant="success" style={{marginLeft:"5px"}} onClick={this.addMintNumber}> + </Button>
                                <Button variant="success" style={{marginLeft:"5px"}} onClick={this.subMintNumber}> - </Button>
                            </div>
                        </Col>
                        <Col lg={3} style={{alignSelf:"center", textAlign:"center", marginBottom:"20px"}}>
                            <Button variant="success">Mint Now</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default NftMint;