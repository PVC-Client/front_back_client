import React, { useState } from "react";
// import * as React from 'react';
import "./signup.css"
import axios  from "axios";
import url from "../config";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [phone_no,setNo]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [Re_password,setRePassword]=useState();
  

    

    const handleSubmit = (e) => {
        e.preventDefault();

    
        if(password===Re_password){
        axios.post(`${url}/registration/user/signup`,{name,phone_no,email,password}).then((res)=>{
            if(res.status===201){
                alert('Successfull login now')
                navigate('/login')
            }
        }).catch(e=>alert('somethings wrong'))}else{
            alert('Password wrong')
        }
       
        
    }

    return (
        <div className="signup">
            <div className="form1">


                <div className="sgin__form">
                    <h1>CREATE ACCOUNT</h1>

                    <form action='' onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor='user_name'></label>
                            <input type='text' autoComplete='off'
                                placeholder=' Your Name'
                            
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                                name='user_name' id='user_name' />
                        </div>

                        <div>
                            <label htmlFor='phone_number'></label>
                            <input type='number' autoComplete='off'
                                placeholder=' Your Phone Number'
                                
                                onChange={(e)=>{
                                    setNo(e.target.value);
                                }}
                                name='phone_number' id='phone_number' />
                        </div>

                        <div>
                            <label htmlFor='email'></label>
                            <input type='text' autoComplete='off'
                                placeholder=' Email'
                            
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                name='email' id='email' />
                        </div>

                        <div>
                            <label htmlFor='password'></label>
                            <input type='password' autoComplete='off'
                                placeholder=" password"
                                
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                name='password' id='password' />
                        </div>

                        <div>
                            <label htmlFor='Re_password'></label>
                            <input type='Re_password' autoComplete='off'
                                placeholder=" Re-enter your password"
                                
                                onChange={(e)=>{
                                    setRePassword(e.target.value)
                                }}
                                name='Re_password' id='Re_password' />
                        </div>

                        <div className="check_div">
                            <input className="checkbox" type="checkbox" label="" />
                            <p>I agree all statements in <u>Terms of service </u></p>
                        </div>
                        <button className='btn_sign' type='submit'><b>Sign Up</b></button>
                    </form>

                    <div className="lgin_div">
                        <p>have already an account ?  <button className="log" onClick={()=>{
                            navigate('/login')
                        }} >Login</button></p>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default Signup;