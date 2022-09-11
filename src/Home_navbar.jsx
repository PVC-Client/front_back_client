import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './home_navbar.css';
import logo from './images/logo.png';
import axios from 'axios'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
const Home_navbar = () => {
  const navigate = useNavigate();
  const [auth_profile, setAuthProfile] = useState()
  const [profile,setProfile]=useState()
  useEffect(() => {
    axios.post('/registration/g_auth/check_user').then((res) => {
      setAuthProfile(res.data)
    }).catch((e) => {

    })
    axios.get('/registration/check_user').then((res) => {
      
      setProfile(res.data)
    }).catch((e) => {

    })

  }, [])
  const bar = useRef(null);
  window.onscroll = () => {
    if (window.scrollY > 65) {
      bar.current.classList.add("active2");
    }
    else {
      bar.current.classList.remove("active2");
    }
  }

  const login = () => {
    navigate("/login");
  }
  const Sign = () => {
    navigate("/createAccount");
  }
  return (
    <div className='home_navbar'>
      <div className='top'>
        <div className='location'>
          <i class="fa-solid fa-location-pin" id="icon"></i>
          <h4>1010 Avenue,New York,USA-2029</h4>
        </div>
        <div className='phone'>
          <i class="fa-solid fa-phone" id="icon"></i>
          <h4>456123078</h4>
        </div>
        <div className='clock'>
          <i class="fa-solid fa-clock" id="icon"></i>
          <h4>Mon-Sat,8.00-18.00.Sunday Closed</h4>
        </div>

      </div>
      <div className='navbar1' ref={bar}>
        <img src={logo} className="logo"></img>
        <ul>
          <li style={{color:"#0D6EFD"}}>Home</li>
          {/* /-----------------------------------------------------------services-------------------------------------------------/ */}
          <li><Link to={'/services'}><span>Services</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
              <a href="#ux"><li>UX Design</li></a>
           <a href="#web"><li>Web Development</li></a>
            <a href="#bro"><li>Brochure Designing</li></a>
            <a href="#visit"><li>Business Card</li></a>
            <a href="#busi"><li>Business Reports</li></a>

              </ul>
            </div>
          </li>
          {/* /---------------------------------------------------------------compilance-----------------------------------------------------/ */}

          <li><Link to={'/compilance'}><span>Compilance</span> </Link><span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <li>Accounting Services</li>
                <li>Other Legal Services</li>
                <li>Digital Signature</li>
                <li>Import Export Code</li>
                <li>Company PAN Card</li>
                <li>Company TAN Number</li>
                <li>Bar Code</li>
                <li>ISO 9001</li>
                <li>Shop Act</li>
                <li>Fssai</li>
                <li>ITR Filing</li>
              </ul>
            </div>
          </li>
          {/* /-----------------------------------------------------------------trademark--------------------------------------/ */}
          <li>Trademark<span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <li>Trademark Registration</li>
                <li>Trademark Objection/Hearing/Renewal</li>
                <li>Trade License</li>

              </ul>
            </div>
          </li>
          {/* /--------------------------------------------------------------------GST---------------------------------------------/ */}
          <li>Gst<span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <li>GST Registration</li>
                <li>GST Filing</li>


              </ul>
            </div>
          </li>
          {/* /--------------------------------------------------------------------registration----------------------------------------------/ */}
          <li>Registartion<span><i class="fa-solid fa-chevron-down" id="menu_icon"></i></span>

            <div className='submenu'>
              <ul>
                <li>MSME(Udyam) Registration</li>
                <li>Proprietorship Registration</li>
                <li>Partnership Registration</li>
                <li>Pvt ltd/LLP/OPC Registration</li>
                <li>Professional Tax registration</li>



              </ul>
            </div>
          </li>
          <li>About Us</li>
        </ul>

        {
          auth_profile|| profile ? (<>
          <div className="navbar-profile"><AccountBoxIcon></AccountBoxIcon><p>{auth_profile || profile}</p> <LogoutIcon onClick={()=>{
           
            axios.post('registration/logout').then((res)=>{
               if(res.status===200)  window.location.reload();
            })
            window.location.reload();
            
            
          }}></LogoutIcon></div>
            
          </>) : (<><button className='btn2' onClick={Sign}>Sign Up</button>
            <button className='btn3' onClick={login}>Log In</button>
          </>)
        }
      </div>
    </div>
  )
}

export default Home_navbar