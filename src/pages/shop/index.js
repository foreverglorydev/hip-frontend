import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "../../components/header";
import Banner from "../../components/banner";
import About from "../../components/about";
import SneakPeek from "../../components/sneakpeek";
import Roadmap from "../../components/roadmap";
import Faq from "../../components/faq";
import Footer from "../../components/footer";

AOS.init();

function Home() {
    return (
        <div>
            <header className="page-header">
                <Header />
            </header>
            <Banner />
            <div className="section-seperater left"></div>
            <footer className="page-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
