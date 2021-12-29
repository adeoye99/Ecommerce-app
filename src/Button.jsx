import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
background-color:#778899;
color: white;
white-space:nowrap;
outline:none;
border:none;
cursor:pointer;
text-decoration:none;
transition:0.3s;
justify-content: center;
align-item: center; 
font-size: 1.1rem;
height: 30px;
width: 300px;
padding: 15px;

&:hover{
    background-color: black;
}
@media only screen and (max-width: 768px){
    text-align:center;
    justify-content:center;
    width:200px;
    margin-right:auto;
    margin-bottom:30px;
    padding: 15px;
}
`;
export default Button;