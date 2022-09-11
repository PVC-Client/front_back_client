import React, { useEffect } from 'react'
import './promises.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Promises = () => {
    useEffect(() => {
      
        AOS.init({
        offset:150,
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        // whether elements should animate out while scrolling past them
        });
        
      });
  return (
    <div className='promises'>
       <div className='head'>
                <h1 data-aos="zoom-in" data-aos-duration="1500">Our Promises</h1>
            </div>
            <div className='content'>
                <div className='first'>
                    <div className='box1' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
                    <i class="fa-solid fa-hand-holding-heart" id="icon"></i>
                       <h2>Provision of your all Registration at the least time frame</h2>
                    </div>
                    <div className='box2' 
                    data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     data-aos-delay="200">
                    <i class="fa-solid fa-hand-holding-heart" id="icon"></i>
                    <h2>Complete help and guidance with online application filling at our portal</h2>
                    </div>
                </div>
                <div className='first'>
                    <div className='box1' 
                     data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     data-aos-delay="400">
                    <i class="fa-solid fa-hand-holding-heart" id="icon"></i>
                       <h2>Consultation on selecting the right Registration/license type for your business</h2>
                    </div>
                    <div className='box2'
                     data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     data-aos-delay="600">
                    <i class="fa-solid fa-hand-holding-heart" id="icon"></i>
                    <h2>Hand-holding through the entire registration procedure</h2>
                    </div>
                </div>
                <div className='first'>
                    <div className='box1'
                     data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     data-aos-delay="800">
                    <i class="fa-solid fa-hand-holding-heart" id="icon"></i>
                       <h2>A solution to all your questions and concerns regarding the registration</h2>
                    </div>
                    <div className='box2'
                     data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"
     data-aos-delay="1000">
                    <i class="fa-solid fa-hand-holding-heart" id="icon"></i>
                    <h2>At our guiding principle is to guarantee that your business begins as soon as possible and as seamlessly as practical</h2>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Promises