import React, {useState,useRef,useEffect} from 'react'
import styled,{ css } from "styled-components"
import SlideDatas from "../Data/Slidedata";
import { Link } from "react-router-dom"
import {IoMdArrowRoundForward} from "react-icons/io";
import { IoArrowBack,IoArrowForward } from "react-icons/io5";



const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
display:flex;
@media only screen and (max-width:768px){
    justify-content:center;
    display:flex;
    flex-direction:column;
}
`

const Herowrapper = styled.div`
position:relative;
width:50%;
float:left;
height:100%;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
margin:0;

@media  screen and (max-width:768px){
    overflow:hidden;
    height:100%;
    width:100%;
    margin:0;

}

`
const HeroSlide = styled.div`
postion: relative;
width:50%;
height:100%;
@media only screen and (max-width:768px){
    height:100vh;
    width:100%;
}
`
const Button = styled.button`
width: 400px;
height:50px;
margin-top:100px;
@media only screen and (max-width:768px){
    width:200px;
    margin-top:10px;
}

`
const HeroSlider= styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

&:before{
    content: '';
    position: absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom: 0vh;
    left:0;
    overflow:hidden;
    opacity : 0.4;
    background: linear-gradient(
        0deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%,
    )
}
@media only screen and (max-width:768px){
     height:100vh;
 
}
`
const HeroImage = styled.img`

width:50vw;
height:100vh;
object-fit: cover;
@media screen and (max-width:768px){
    height:100%;
    width:100vw;
}

`
const Arrow = styled(IoMdArrowRoundForward)`
   
`
const SliderButton = styled.div`
position: absolute;
bottom:30px;
right:30px;
display:flex;
z-index:10;
`

const arrowButtons = css` 
width:30px;
height: 30px;
color:black;
cursor:pointer;
background:white;
border-radius: 50px;
padding: 10px;
margin-right:1rem;
user-select: none;
transition:0.3s;

&:hover{
    background: #778899;
    transform:scale(1.05);
}
`
const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`
const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`
const HeroContent = styled.div`
padding: 20px 50px;
@media only screen and (max-width:768px){
    width:100%;
    margin-top:0;

    
}`
const HeroTitle = styled.div`
     margin-bottom: 50px;
     font-size:clamp(1rem,8vw,2rem);
     text-align:center;
     justify-content: center;
`
const Filter = styled.div`
 display: flex;
 
`
const Describ = styled.span`

`
const ProductName = styled.h2`


`

const FilterTitle = styled.p`
 font-size: 1.5rem;
 font-weight: 300;
`
const FilterSize = styled.select`
justify-content: space-between;
margin-left:10px;
padding:5px;
`
const FilterOption = styled.option`

`
const Price = styled.p``

function ProductSlider({slides,title,description,price}) {
    const [current,setCurrent] = useState(0)
    const length = slides.length;
    const timeout = useRef(null);
    useEffect(() =>{
        const nextSlide = () =>{
        setCurrent(current =>(current === length - 1 ? 0: current + 1));
    };
    
    return function(){
        if(timeout.current){
            clearTimeout(timeout.current);
        }
    };
    },
    [current,length]
    );
    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0: current +1)
    };
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)

 
    }
    if (!Array.isArray(slides) || slides.length <= 0 ){
        return null;
    }
    return (
        <HeroSection>
            <Herowrapper>
                {slides.map((slide,index) =>{
                    return(
                        <HeroSlide key = {index}>
                           {index === current && (
                                 <HeroSlider>
                                 <HeroImage src = {slide.img} alt = {slide.alt}/>
                             </HeroSlider>
                           )} 
                        </HeroSlide>
                     )
                })}
               
              <SliderButton>
                <PrevArrow onClick = {prevSlide}/>
                <NextArrow onClick = {nextSlide}/>
               </SliderButton>  
            </Herowrapper>
          
           <HeroContent>
               <ProductName>{title}</ProductName>
                <Describ>
                    {description}
               </Describ>
               <Price>
                   {price}
               </Price>
               <Filter>
                   <FilterTitle>Size</FilterTitle>
                   <FilterSize>
                       <FilterOption>S</FilterOption>
                       <FilterOption>M</FilterOption>
                       <FilterOption>L</FilterOption>
                       <FilterOption>XL</FilterOption>
                       <FilterOption>XXL</FilterOption>
                   </FilterSize>
               </Filter>
               <Button>ADD TO CART</Button>
            </HeroContent>
         </HeroSection>
    )
}

export default ProductSlider;
