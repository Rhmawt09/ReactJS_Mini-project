import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/Homepage';
import { Button } from 'reactstrap';
import About from './element/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route index element={<Homepage />} />
        <Route path="about" element={<About/>}/>
      </Routes>
    <div className='row text-light'>
      <div className='col-2 bg-dark'>
      </div>
    </div>
    </div>
  );
  }
export default App;
