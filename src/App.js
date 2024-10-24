import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/layouts/Home';
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import About from './components/layouts/About';
import Services from './components/layouts/Services';
import Contact from './components/layouts/Contact';
import LoginSignup from './components/layouts/LoginSignup';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/loginsignup' element={<LoginSignup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
