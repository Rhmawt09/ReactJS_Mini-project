import Banner from '..//Component/Banner'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import About from '../element/About'
import OurMenu from '../element/OurMenu'


function Homepage(){
    return(
        <div className="homepage">
            <Navbar />
            <Banner />
            <About/>
            <OurMenu/>
            <Footer />

        </div>
    )
}

export default Homepage
