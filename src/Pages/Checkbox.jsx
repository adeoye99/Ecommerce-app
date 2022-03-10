import React from 'react'
import { FaBasketballBall } from 'react-icons/fa';
import { useStateValue } from "../LoginComponents/StateProvider";
import {Link} from 'react-router-dom';


function Checkbox() {
    const [{ mycart }] = useStateValue()
    return (
        <div>
            {mycart?.length === 0 ? 
	        (<div>
		      <h2 className="mycart__title">Your cart is empty</h2>
	         </div>
			 ):(
	        	<div>
		        	<div>
		               	<h2 className = "mycart__title">Your shopping Cart</h2>
			       </div>
		            <div className ="mycart__movies">
			            {mycart.map(item => 
			            <Checkoutproduct
			                id = {item.id}
			               img = {item.src}
			               alt = {item.alt}
			               price = {item.price}
			               title = {item.title}
			              />)}
	            	</div>
	             </div>
	   )}</div>
	   )
}

export default Checkbox;
