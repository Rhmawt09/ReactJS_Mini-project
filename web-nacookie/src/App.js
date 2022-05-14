import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Homepage/>} />
       <Route index element={<Homepage />} />
      </Routes>
    <div className='row text-light'>
      <div className='col-2 bg-dark'>
      </div>
    </div>
    </div>
  );
  }
export default App;
