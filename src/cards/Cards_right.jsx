import React from 'react'
import './cards.css';

const Cards_right = (props) => {
  return (
    <section id={props.href}>
    <div  className='services-card' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    
     <div className='right'>
       <h1>{props.title}</h1>
       <p>{props.desc}</p>
     </div>
     <div className='left'>
     <img src={props.image}></img>
     </div>
   </div>
   </section>
  )
}

export default Cards_right