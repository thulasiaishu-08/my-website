import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/layouts/Home';
import "./assets/css/style.css";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
