import React from 'react'
import { Link } from "react-router-dom";
import "./Createaccount.css";

function Createaccount() {
    return (
        <div>
             < div className ="login">
            <div className = "login__header">
                <h1>Create Account</h1>
            </div>
                <div className = "login__option1">
                    <input  className = "login__email" type = "text" placeholder="Email or Phone Number"/>
                </div>
                <div className = "login__option2"> 
                   <input className = "login__password" type = "password" placeholder = "Password"/>
                </div>
                <div> 
                </div>
                <div className = "login__option3">
                    <button  className = "login__button" type = "submit">Create Account</button>
                </div>
               
        </div>

            
        </div>
    )
}

export default Createaccount
