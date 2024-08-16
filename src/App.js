import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/layouts/Home';
import "./assets/css/style.css";
import About from './components/layouts/About';
import Services from './components/layouts/Services';
import Contact from './components/layouts/Contact';
import LoginSignup from './components/layouts/LoginSignup';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/loginsignup' element={<LoginSignup/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
