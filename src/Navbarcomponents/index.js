import React from 'react'
import {NavLink,Nav,NavMenu, Bars,Icon} from "./Navbarcomponents";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import "./nav.css";
function Navbar({toggle}) {
    return (
        <div>
        <Nav>
            <Bars onClick ={toggle}/>
                <NavMenu>
                    <NavLink to = "/Home">
                        Home
                    </NavLink>
                    <NavLink to = "/Men">
                         Men
                    </NavLink>
                    <NavLink to = "/Women">
                        Women
                    </NavLink>
                </NavMenu>
                <Icon to = "/checkbox">
                       <ShoppingCartIcon/>
                       <p>0</p>
                 </Icon> 
        </Nav>
        </div>
            
        
    )
}

export default Navbar;
