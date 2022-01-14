import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Link , useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useStateValue } from "./StateProvider";



function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = (event) =>{
        const auth = getAuth();
         signInWithEmailAndPassword(auth,email,password)
          .then(auth => {
            navigate("/Home")
          })
          .catch((event) => alert (event.message));
     event.preventDefault()
    }
   
  
    return (
        < div className ="login">
            <div className = "login__header">
                <h1>Sign In</h1>
            </div>
                <div className = "login__option1">
                    <p className="login__createaccount">Don't have an Account?<Link to = "/Createaccount">Create Account</Link></p>
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
        </div>
    )

    

    }

    


export default Login;