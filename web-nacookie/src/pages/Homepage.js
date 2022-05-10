import Banner from "../Component/Banner";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


function Homepage(){
    return(
        <div className="homepage">
            <Navbar />
            <Banner />
            <Footer />

        </div>
    )
}

export default Homepage
