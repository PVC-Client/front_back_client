import React, { useEffect } from 'react'
import './services.css';
import ux from './images/ux_design.jpeg';
import web from './images/web_dev.jpeg';
import broc from './images/brochure.jpeg';
import buss from './images/business_card.jpeg';
import bus_report from './images/business_report.jpeg';

import Cards_left from './cards/Cards_left';
import Cards_right from './cards/Cards_right';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  useEffect(() => {
      
    AOS.init({
       
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    // whether elements should animate out while scrolling past them
    });
    
  });
  return (
    <div className='services'> 
    <div className='head'>
       <h1 data-aos="zoom-in" data-aos-duration="1000" >Our Services</h1>
</div>
<div className='content'>
{/* /-------------------------------------------------------------------------card1-----------------------------------------------------/ */}
  <Cards_left href="ux"
  image={ux}
  title="UX Design"
  desc="UX design is the process used to determine what the experience will be like when a user interacts with your product. UX requires a deep understanding of the user: their needs, wants, behaviours, and the context in which they will use a product. Before our clients (and we) understood the value of user-centered design, we made design decisions based on just two things: what we thought was awesome and what the client wanted to see."
  >
  </Cards_left>

  {/* /---------------------------------------------------------------------------card2-----------------------------------------------------/ */}
  <Cards_right href="web"
  image={web}
  title="Web Development"
  desc="Web development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.Web development is closely related to the job of designing the features and functionality of apps (web design). The term development is usually reserved for the actual construction of these things (that is to say, the programming of sites).">
  </Cards_right>

  {/* /-----------------------------------------------------------------------------card3----------------------------------------------/ */}
  <Cards_left href="bro" image={broc}
  title="Brochure Designing"
  desc="With the presence of the digital world all around us, is it still important to have a well-designed brochure? The answer is yes. Along with your website, social networking, advertising, and marketing efforts, a company brochure is an integral part of your branding process."> 
  </Cards_left>

  {/* /------------------------------------------------------------------------------card4---------------------------------------------------/ */}
  <Cards_right href="visit" image={buss}
  title="Business cards"
  desc="Business cards are often the first piece of marketing we have printed when we start or join a new business and with today’s digital printing techniques anyone can get professional business cards without breaking the bank. Of course, a lot of business is carried out online, so do we really need business cards? The answer is a resounding yes. Business cards are much more personal than email or online marketing. A handshake and exchange of business cards creates a much greater impact than any online correspondence and that’s great for building lasting business relationships">
  </Cards_right>
  
  {/* /-------------------------------------------------------------------------------card5---------------------------------------------------------/ */}
  <Cards_left href="busi" image={bus_report}
  title="Business Report"
  desc="A business report is a collection of data and analyses that helps make relevant information easily accessible to a company. There are many different types of business reports, but this guide will show you the basic outline."> 
  </Cards_left>
</div>

    </div>
  )
}

export default Services