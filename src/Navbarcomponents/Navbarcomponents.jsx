import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
background-color:#778899;
opacity:1;
color : white;
height: 85px;
display: flex;
justify-content: space-between
padding: 0.2rem calc((100vw - 1000px) / 2);
padding-left : 43px;
position:fixed;
width:100%;
top:0;
z-index:100;

@media screen and (max-width : 768px){
	height:70px;

}
`
export const NavLink = styled(Link)`
color: white;
display: flex;
margin-left: 90px;
align-items: center;
text-decoration: none;
padding: 0 1rem;
border-radius: 5px;
height: 80%;
cursor: pointer;
font-size: 1em;
top:0;
z-index:100;

&.active {
	color: white;
	background-color:black;
}
&:hover{
	text-decoration: none;
}
`
export const Icon = styled(Link)`
position:absolute;
top:1.5rem;
right:4rem;
display:flex;
color: white;
text-align:center;
justify-content: center;
font-size: 1rem;
text-decoration:none;
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: 400px;
white-space: nowrap; 
top:0
z-index:100;
@media screen and (max-width: 1024px) {
	display: none;
}
`
export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 1024px) {
	display:block;
	color:white;
	justify-content:center;
	text-align:center;
	margin-right:0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: white;
}
`;