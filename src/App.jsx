import React,{ useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbarcomponents/index';
import Login from './LoginComponents/Login';
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import "./App.css";
import Footer from "./Footercomponent/Footer";
import Dropdown from "./Dropdowncomponents/Dropdown";
import Checkbox from "./Pages/Checkbox";
import womenProduct1 from "./Pages/womenProduct1";
import womenProduct2 from "./Pages/womenProduct2";
import womenProduct3 from "./Pages/womenProduct3";
import womenProduct4 from "./Pages/womenProduct4";
import womenProduct5 from "./Pages/womenProduct5";
import womenProduct6 from "./Pages/womenProduct6";





function App() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        
        <Router>
            <Navbar toggle = {toggle}/>
            <Dropdown isOpen = {isOpen} toggle ={toggle}/>
           
            <div>
            <Routes>
                <Route exact path ="/" element = {<Login/>}/>
                <Route path ="/Home" element ={<Home/>}/>
                <Route  path = "/Men" element ={<Men/>}/>
                <Route path = "/Women" element ={<Women/>}/>
                <Route path = "/checkbox" element = {<Checkbox/>}/>
                <Route path ="/womenProduct1" element ={<womenProduct1/>}/>
                <Route path ="/womenProduct2" element ={<womenProduct2/>}/>
                <Route path ="/womenProduct3" element ={<womenProduct3/>}/>
                <Route path ="/womenProduct4" element ={<womenProduct4/>}/>
                <Route path ="/womenProduct5" element ={<womenProduct5/>}/>
                <Route path ="/womenProduct6" element ={<womenProduct6/>}/>
            </Routes>
            </div>
        </Router>
    )
}

export default App;
