import React, {useState,useRef,useEffect} from 'react'
import styled,{ css } from "styled-components"
import SlideDatas from "../Data/Slidedata";
import { Link } from "react-router-dom"
import {IoMdArrowRoundForward} from "react-icons/io";
import { IoArrowBack,IoArrowForward } from "react-icons/io5";
import Button  from "../Button";


const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position:relative;
overflow:hidden;
display:flex;
@media only screen and (max-width:768px){
    justify-conten
}
`

const Herowrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`
const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;

`
const HeroSlider= styled.div`
position: absolute;
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
`
const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit: cover;
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
position:absolute;
top:200px;
z-index: 10;
max-width:1600px;
width:calc(100% - 100px);
color:white;
justify-content: center;
text-align: center;
h1{
    
   
    text-align:center;

}
@media only screen and (max-width:768px){
    position:relative;
    top:20px;
    right:104px;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction:column;
    h1{
        margin-left:90px;
    }
}


`
const HeroTitle = styled.div`
     margin-bottom: 50px;
     font-size:clamp(1rem,8vw,2rem);
     text-align:center;
     justify-content: center;

`

function Hero({slides}) {
    const [current,setCurrent] = useState(0)
    const length = slides.length;
    const timeout = useRef(null);
    useEffect(() =>{
        const nextSlide = () =>{
        setCurrent(current =>(current === length - 1 ? 0: current + 1));
    };
    timeout.current =  setTimeout(nextSlide, 3000);
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
                 <HeroContent>
                     <HeroTitle>
                         <h1>SHOP WITH</h1>
                         <h1> US </h1>
                     </HeroTitle>
                        <Button to= "/Men">SHOP FOR MEN</Button>
                        <Button 
                         className = "women__button"
                          to= "/Women"
                         css={`
                             margin-left:50px;
                             `}>SHOP FOR WOMEN</Button>
                </HeroContent>      
               <SliderButton>
                <PrevArrow onClick = {prevSlide}/>
                <NextArrow onClick = {nextSlide}/>
               </SliderButton>  
            </Herowrapper>
         </HeroSection>
    )
}

export default Hero;
