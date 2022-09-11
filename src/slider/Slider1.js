import React from 'react'
import './homeSlider.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import pic1 from '../slider/images/slider1.jpg'
function Slider1() {
  return (
     <>
    <div className="home-main-slider">
      <div className="slider1">
       
        <div className="slider1-main">
           
           <div className="slider1-main-text">
           <h2>Expert Consultants</h2>
           <h4>Over 10 years of experience in helping clients 
           finding comperhensive solutions .</h4>
           </div>
           
            
           <div className="slider1-main-btn">
           <button className='btn1'>Read more <KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
           <button className='btn2'>Contact us <KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
           <div></div>
           <div></div>
           </div>
            
          
        </div> 
        
      </div>
     

  
    </div>
   
     </>
  )
}

function Slider2() {
  return (
   <>
    <div className="home-main-slider">
      <div className="slider2">
       
        <div className="slider2-main">
           
           <div className="slider2-main-text">
           <h2>Helping Leaders</h2>
           <h4>We look forward to help you in taking your company to 
           new height .</h4>
           </div>
           
            
           <div className="slider2-main-btn">
           <button className='btn1'>Read more <KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
           <button className='btn2'>Contact us <KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
           <div></div>
           <div></div>
           </div>
            
          
        </div> 
        
      </div>
     

  
    </div>
   
   </>
  )
}


function Slider3() {
  return (
    <>
      <div className="home-main-slider">
      <div className="slider3">
       
        <div className="slider3-main">
           
           <div className="slider3-main-text">
           <h2>Growth Partners</h2>
           <h4>Conncect with top Consultants hand-picked by 
           Elixir consulting and finance .</h4>
           </div>
           
            
           <div className="slider3-main-btn">
           <button className='btn1'>Read more <KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
           <button className='btn2'>Contact us <KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
           <div></div>
           <div></div>
           </div>
            
          
        </div> 
        
      </div>
     

  
    </div>
   
    </>
  )
}


export {Slider1,Slider2,Slider3}