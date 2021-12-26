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
import WomenProduct1 from "./Pages/womenProduct1";
import WomenProduct2 from "./Pages/womenProduct2";
import WomenProduct3 from "./Pages/womenProduct3";
import WomenProduct4 from "./Pages/womenProduct4";
import WomenProduct5 from "./Pages/womenProduct5";
import WomenProduct6 from "./Pages/womenProduct6";





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
                <Route path ="/womenProduct1" element ={<WomenProduct1/>}/>
                <Route path ="/womenProduct2" element ={<WomenProduct2/>}/>
                <Route path ="/womenProduct3" element ={<WomenProduct3/>}/>
                <Route path ="/womenProduct4" element ={<WomenProduct4/>}/>
                <Route path ="/womenProduct5" element ={<WomenProduct5/>}/>
                <Route path ="/womenProduct6" element ={<WomenProduct6/>}/>
            </Routes>
            </div>
        </Router>
    )
}

export default App;
