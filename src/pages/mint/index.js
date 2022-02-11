import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "../../components/header";
import Footer from "../../components/footer";
import NftMint from "../../components/mint";

AOS.init();

function Mint() {
    return (
        <div>
            <header className="page-header">
                <Header />
            </header>
            <section className="mint">
                <NftMint />
            </section>
            <div className="section-seperater right"></div>
            <footer className="page-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Mint;
