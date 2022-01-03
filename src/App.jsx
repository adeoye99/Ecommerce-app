import React,{ useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbarcomponents/index';
import Login from './LoginComponents/Login';
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Createaccount from './Createaccountcomponent/Createaccount';
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
import WomenProduct7 from "./Pages/WomenProduct7";
import WomenProduct8 from "./Pages/WomenProduct8";
import WomenProduct9 from "./Pages/WomenProduct9";
import WomenProduct10 from "./Pages/WomenProduct10";
import WomenProduct11 from "./Pages/WomenProduct11";
import MenProduct1 from "./Pages/MenProduct1";
import MenProduct2 from "./Pages/MenProduct2";
import MenProduct3 from "./Pages/MenProduct3";
import MenProduct4 from "./Pages/MenProduct4";
import MenProduct5 from "./Pages/MenProduct5";
import MenProduct6 from "./Pages/MenProduct6";
import MenProduct7 from "./Pages/MenProduct7";
import MenProduct8 from "./Pages/MenProduct8";




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
                <Route path = "/Createaccount" element ={<Createaccount/>}/>
                <Route path = "/checkbox" element = {<Checkbox/>}/>
                <Route path ="/Women/womenProduct1" element ={<WomenProduct1/>}/>
                <Route path ="/Women/womenProduct2" element ={<WomenProduct2/>}/>
                <Route path ="/Women/womenProduct3" element ={<WomenProduct3/>}/>
                <Route path ="/Women/womenProduct4" element ={<WomenProduct4/>}/>
                <Route path ="/Women/womenProduct5" element ={<WomenProduct5/>}/>
                <Route path ="/Women/womenProduct6" element ={<WomenProduct6/>}/>
                <Route path = "/Women/womenProduct7" element = {<WomenProduct7/>}/>
                <Route path = "/Women/womenProduct8" element = {<WomenProduct8/>}/>
                <Route path = "/Women/womenProduct9" element = {<WomenProduct9/>}/>
                <Route path = "/Women/womenProduct10" element = {<WomenProduct10/>}/>
                <Route path = "/Women/womenProduct11" element = {<WomenProduct11/>}/>
                <Route path = "/Men/MenProduct1" element = {<MenProduct1/>}/>
                <Route path = "/Men/MenProduct2" element = {<MenProduct2/>}/>
                <Route path = "/Men/MenProduct3" element = {<MenProduct3/>}/>
                <Route path = "/Men/MenProduct4" element = {<MenProduct4/>}/>
                <Route path = "/Men/MenProduct5" element = {<MenProduct5/>}/>
                <Route path = "/Men/MenProduct6" element = {<MenProduct6/>}/>
                <Route path = "/Men/MenProduct7" element = {<MenProduct7/>}/>
                <Route path = "/Men/MenProduct8" element = {<MenProduct8/>}/>
            </Routes>
            <Footer/>
            </div>
        </Router>
    )
}

export default App;
