import React, { useEffect } from 'react'
import './gst.css'
import gst from './images/gst.jpg'
import apiData from './apidata/apidata';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import { Outlet, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Gst() {
    useEffect(() => {
      
        AOS.init({
           
        easing: 'ease', // default easing for AOS animations
        once: false,
        offset:250, // whether animation should happen only once - while scrolling down
        // whether elements should animate out while scrolling past them
        });
        
      });
    return (
        <div className="gst-main">

            <div className="gst-heading">
                <h1 data-aos="zoom-in" data-aos-duration="1000">GST Services</h1>
                

            </div>
            <div className="gst">

                <Item1 data={apiData[0]} ></Item1>
                <Item1 data={apiData[1]} type="reverse"></Item1>
                
            </div>

          


        </div>


    )
}
const fun=()=>{
    alert("hi");
}
function Item1(props) {

    return (<>

        <div className={`gst-item1 ${props.type === 'reverse' ? "items-reverse" : ""}`} data-aos="fade-up" data-aos-duration="1000">
            {
                props.data ? (<>
                    <div className="item1-img">
                       <Link to={{pathname: `/${props.data.click}`}}> <img src={props.data.image_url} alt=""  /></Link>

                    </div>
                    <div className="item1-text-information">
                        <div className="text">
                            <h1>{props.data.name}</h1>
                            <p>{props.data.content}</p>
                           
                        </div>

                    </div>
                </>) : (<></>)
            }

        </div>
    </>)
}

function Item2(){
    return(<>
         <div className="gst-lower-information">
           <div className="gst-lower-information-top">
             <span><ViewCompactIcon></ViewCompactIcon></span>
             <h4>Special financing</h4>
             
           </div>
           <h5>Apply for special financial support and earn exclusive rewards.</h5>
         </div>
    </>)
}

function Item3(){
    return(<>
         <div className="gst-lower-information">
           <div className="gst-lower-information-top">
             <span><ChatIcon></ChatIcon></span>
             <h4>Chat with team</h4>
             
           </div>
           <h5>Have a question? Chat online with an expert. Start chatting</h5>
         </div>
    </>)
}


function Item4(){
    return(<>
         <div className="gst-lower-information">
           <div className="gst-lower-information-top">
             <span><CallIcon></CallIcon></span>
             <h4>Call a Specialist</h4>
             
           </div>
           <h5>Our 24/7 support team is ready for you start conversion</h5>
         </div>
    </>)
}
export default Gst;
export {Item1};