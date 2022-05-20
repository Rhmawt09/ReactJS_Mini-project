import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import { Button } from 'reactstrap';
import About from './element/About';
import Banner from './Component/Banner';
import Contact from './element/Contact';
import OurMenu from './element/OurMenu';
import Review from './element/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route index element={<Homepage />} />
        <Route path="about" element={<About/>}/>
        <Route path='Home' element={<Banner/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='varian' element={<OurMenu/>}/>
        <Route path='review' element={<Review/>}/>
      </Routes>
    <div className='row text-light'>
      <div className='col-2 bg-dark'>
      </div>
    </div>
    </div>
  );
  }
export default App;
