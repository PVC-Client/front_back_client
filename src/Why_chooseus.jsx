import React, { useEffect } from 'react'
import './whychoose.css'
import why_choose from './images/why_choose.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Why_chooseus = () => {
    useEffect(() => {
      
        AOS.init({
           
        easing: 'ease', // default easing for AOS animations
        once: false,
        offset:250, // whether animation should happen only once - while scrolling down
        // whether elements should animate out while scrolling past them
        });
        
      });
  return (
    <div className='why_choseus'>
        
            <div className='head'>
                <h1 data-aos="zoom-in" data-aos-duration="1500">Why Choose PTC?</h1>
            </div>
            <div className='content'>
                {/* /-------------------------------------------------------------------------card1-----------------------------------------------------/ */}
                <div className='why_choseus-card' data-aos="fade-up" data-aos-duration="1500">
                    <div className='left'>
                        <img src={why_choose}></img>
                    </div>
                    <div className='right'>
                        <div className='box'>
                        <i class="fa-regular fa-comment-dots" id="icon"></i>
                        <h2>We are Professional</h2>
                        </div>
                        <p>PTC is a team of experienced professionals of CA/CS and lawyers and well-rehearsed with the legal attributes, ready to help business entities fulfil their legal documentation.</p>  

                        <div className='box'>
                        <i class="fa-solid fa-palette" id="icon"></i>
                        <h2>We are Creative</h2>
                        </div>
                        <p>With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?</p>  
                        <div className='box'>
                        <i class="fa-solid fa-at" id="icon"></i>
                        <h2>We are Authorized</h2>
                        </div>
                        <p>We are authorized from FSSAI, we have license to apply for FSSAI, and our name is mentioned on FSSAI portal, for cross verification you can check on FSM website.So in case of application done by authorized company, chances of rejection and inspection will be very low 1%-5% and chances of approval is very high 95%+. </p>
                    </div>

                </div>
                </div>
    </div>
  )
}

export default Why_chooseus