
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Planets from './Components/Planets';
import Vehicles from './Components/Vehicles';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element ={<Main />} />
      <Route path='main' element ={<Main />} />
      <Route path='planets' element = {<Planets />} />
      <Route path='vehicles' element = {<Vehicles />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;