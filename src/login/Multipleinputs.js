import React, { useState } from 'react'
import "./UserLogin.css"
import pic from './login_img.png'
import google_pic from './gg-pic3.png'
import fb_pic from './ff_pic.png'
import axios from 'axios'
import url from '../config'
import {signInWithGoogle} from '../firebase'
import { useNavigate } from 'react-router-dom'

const Multipleinputs = () => {
    const navigate=useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

   

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
       
        setUserLogin({ ...userLogin, [name]: value });

    }

    function userlogin(status){
        
        if(status===200){
           navigate('/')
        }else{
            alert('somthings wrong ')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
     
    
    
        axios.post('/registration/user/signin',{email:userLogin.email,password:userLogin.password}).then((res)=>{
            if(res.status===200){
                navigate('/')
            }else {
                alert('somthings wrong ')
            }
        }).catch((e)=>{
            alert('somthings wrong ')
        })
     

    }






    return (
        <div className='login'>
            <div className='content'>
                <div className='left'>
                    <img src={pic} />
                </div>

                <div className='form'>
                    <h1>Member login</h1>

                    <form action='' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email'></label>
                            <input type='text' autoComplete='off'
                                placeholder='&#xF199; Email'
                                value={userLogin.email}
                                onChange={handleInput}
                                name='email' id='email' />


                        </div>

                        <div>
                            <label htmlFor='password'></label>
                            <input type='password' autoComplete='off'
                                placeholder="&#xf023; password"
                                value={userLogin.password}
                                onChange={handleInput}
                                name='password' id='password' />
                        </div>
                        <button className='btn' type='submit'><b>Login</b></button>
                    </form>

                    <div className='frgt_div'>

                        <span className='frgt'>
                            Forgot
                            <button className='forgot' type='submit'>Username</button>
                            /<button className='forgot'>Password?</button>
                        </span>
                    </div>



                    <p className='or_login'>Or login with</p>
                    <div className='icons'>
                        <div className='icon1'>
                            <button className='gg' type="submit" onClick={()=>{
                                signInWithGoogle(userlogin);}
                            }>
                                <img src={google_pic} alt="Submit"/>
                            </button></div>

                        <div className='icon1'>
                            <button className='fb' type="submit">
                                <img src={fb_pic} alt="Submit" />
                            </button>
                        </div>

                    </div>
                    <button className='create frgt_div' onClick={()=>{navigate('/createAccount')}} type='submit' > Create your Account &#xf061;</button>



                </div>
            </div>
        </div >
        
    )
}

export default Multipleinputs



































