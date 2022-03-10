import React from 'react'
import { Link } from "react-router-dom";
import "./Createaccount.css";

function Createaccount() {
  const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

  const register = (event) =>{
    const auth = getAuth();
   createUserWithEmailAndPassword(auth,email,password)
     .then(auth =>{
         navigate("/Login")
     })
     .catch((event)=>alert(event.message))
event.preventDefault();
}

  
    return (
        <div>
             < div className ="login">
               <div className = "login__header">
                   <h1>Create Account</h1>
                 </div>
                 <div className = "login__option1">
                    <input value = {email} onChange= {(event)=>setEmail(event.target.value)} className = "login__email" type = "text" placeholder="Email or Phone Number"/>
                 </div>
                 <div className = "login__option2"> 
                   <input value = {passwordd} onChange= {(event)=>setPassword(event.target.value)} className = "login__password" type = "password" placeholder = "Password"/>
                 </div>
                 <div className = "login__option3">
                    <button onClick = {register} className = "login__button" type = "submit">Create Account</button>
                 </div>
              </div>
        </div>
    )
}

export default Createaccount;
