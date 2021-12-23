import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";


function Login(){
    return (
        < div className ="login">
            <div className = "login__header">
                <h1>Sign In</h1>
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
                    <button  className = "login__button" type = "submit">Login</button>
                </div>
                <Link className = "login__link" to = "/">
                <div className = "login__forgotpassword">
                   <p>forgot password?</p>
                </div>
                </Link>
                <div className = "login__option4">
                    <button className = "login__createaccountbutton" type = "submit">Create Account</button>
                </div>   
        </div>
    )

    

    }

    


export default Login;