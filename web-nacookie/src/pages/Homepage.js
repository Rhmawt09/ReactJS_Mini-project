import Banner from '..//Component/Banner'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import About from '../element/About'
import OurMenu from '../element/OurMenu'
import Contact from '../element/Contact'
import Review from '../element/Review'


function Homepage(){
    return(
        <div className="homepage">
            <Navbar />
            <Banner />
            <About/>
            <OurMenu/>
            <Contact/>
            <Review/>
            <Footer />
        </div>
    )
}

export default Homepage
