import React from 'react'
import './homeSlider.css'

import {Slider1,Slider2,Slider3} from '../slider/Slider1'
function HomeSlider() {
  return (<>

    <div className="home-main-slider">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">
          <div class="carousel-item active">

          <Slider1></Slider1>
          </div>
          <div class="carousel-item">
          <Slider2></Slider2>
          </div>
          <div class="carousel-item">
          <Slider3></Slider3>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      

  </>

  )
}

export { HomeSlider }