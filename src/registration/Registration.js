import React, { useEffect } from 'react'
import './registration.css'
import apiData from '../registration/apidata'
import { Item1 } from '../gst/Gst'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Registration() {
  useEffect(() => {
      
    AOS.init({
       
    easing: 'ease', // default easing for AOS animations
    once: false,
    offset:350, // whether animation should happen only once - while scrolling down
    // whether elements should animate out while scrolling past them
    });
    
  });
  return (
    <div className="registration-main">

            <div className="registration-heading">
                <h1 data-aos="zoom-in" data-aos-duration="1000">Registration</h1>
                <div className="registration-h3-underline">
                 
                </div>

            </div>
            <div className="registration pt-3">

                <Item1 data={apiData[0]}></Item1>
                <Item1 data={apiData[1]} type="reverse"></Item1>
                <Item1 data={apiData[2]}></Item1>
                <Item1 data={apiData[3]} type="reverse"></Item1>
                <Item1 data={apiData[4]}></Item1>
                
                
            </div>

          


        </div>
  )
}

export default Registration