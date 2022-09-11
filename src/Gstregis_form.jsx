import React, { useState } from 'react'
import './gstregistration_form.css';
import axios from 'axios'
import Loader from './loader/Loader'

const Gstregis_form = () => {

   const [loding, setLoding] = useState(false);
  const [name_business,setname_business]=useState();
  const [nature_business,setnature_business]=useState();
  const [phone_no,setphone_no]=useState();
  const [email,setemail]=useState();
  const [pan_card,setpan_card]=useState();
  const [aadher_card,setaadher_card]=useState();
  const [proprietor_photo,setproprietor_photo]=useState();
  const [rent_deed,setrent_deed]=useState();
  const [current_bill,setcurrent_bill]=useState();
  const [bank_passbook,setbank_passbook]=useState();
  const [aadhar_property,setaadhar_property]=useState();
  const [municipal_tax,setmunicipal_tax]=useState();
  const [hsn_code,sethsn_code]=useState();
  const [office_address,setoffice_address]=useState();
  const [residential_address,setresidential_address]=useState();




  
   

   let  formdata=new FormData();
   formdata.append('name_business',name_business);
   formdata.append('nature_business',nature_business);
   formdata.append('phone_no',phone_no);
   
   formdata.append('email',email);
   formdata.append('pan_card',pan_card);
   formdata.append('aadher_card',aadher_card);
   formdata.append('proprietor_photo',proprietor_photo);
   formdata.append('rent_deed',rent_deed);
   formdata.append('current_bill',current_bill);
   formdata.append('bank_passbook',bank_passbook);
   formdata.append('aadhar_property',aadhar_property);
   formdata.append('municipal_tax',municipal_tax);
   formdata.append('hsn_code',hsn_code);
   formdata.append('office_address',office_address);

   formdata.append('residential_address',residential_address);
   


 
  
  const submit_form=(e)=>{
    e.preventDefault();
    setLoding(true)

    axios.post('/gst/registration',formdata).then((res)=>{
    
        setLoding(false)
        
        if(res.status===201 ){
            alert("successfull")
        }else{
            alert("Unsuccessfull !")
        }
    }).catch((e) => {
        setLoding(false)
        alert("Unsuccessfull")
    })
    
    setname_business("");
    setnature_business("")
    setphone_no("");
    setemail("")
    setpan_card("")
    setaadher_card("")
    setproprietor_photo("")
    setrent_deed("")
    setcurrent_bill("")
    setbank_passbook("")
    setaadhar_property("")
    setmunicipal_tax("")
    sethsn_code("")
    setoffice_address("")
    setresidential_address("")











    
  }

  return (<>

    {
        loding?(<><Loader></Loader></>):(<>
               
            <div className='gst_reg'>
    <div className='head'>
        <h1>GST Registration Form</h1>
        </div>
        <div className='content'>
        <div className='inside_content'>
            <h1 className='mx-auto w-25 pt-1'>DETAILS</h1>
            <hr></hr>
            <form  onSubmit={submit_form}>
            <div className='field pt-4'>
                <h5 style={{color:"black",fontWeight:"bolder"}}>Name Of The Business</h5>
                <input type="text" className='inp' name='business_name' value={name_business}  onChange={(e)=>{
                    setname_business(e.target.value)
                }}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Nature of the Business</h5>
                <input type="text" className='inp'   onChange={(e)=>{
                     setnature_business(e.target.value)
                }}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Phone Number</h5>
                <input type="number" className='inp'  onChange={(e)=>{
                     setphone_no(e.target.value)
                }} ></input>               
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Email</h5>
                <input type="email" className='inp' 
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                ></input>               
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Pan Card Xerox</h5>
                <input type="file" className='inp'  onChange={(e)=>{
                    setpan_card(e.target.files[0])
                }}  ></input>              
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Aadhar Card Xerox</h5>
                <input type="file" className='inp'  onChange={(e)=>{
                    setaadher_card(e.target.files[0])
                }}></input>               
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Proprietor Photo</h5>
                <input type="file" className='inp' 
                onChange={(e)=>{
                    setproprietor_photo(e.target.files[0])
                }}></input>            
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Rent deed or Agreement of the registered office</h5>
                <input type="file" className='inp' 
                onChange={(e)=>{
                    setrent_deed(e.target.files[0])
                }}
                ></input>  
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Current bill of the registered office</h5>
                <input type="file" className='inp'  onChange={(e)=>{
                     setcurrent_bill(e.target.files[0])
                }}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Bank passbook of the proprietor</h5>
                <input type="file" className='inp'   onChange={(e)=>{
                     setbank_passbook(e.target.files[0])
                }}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Aadhar Card of the Property Owner</h5>
                <input type="file" className='inp' onChange={(e)=>{
                     setaadhar_property(e.target.files[0])
                }}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Municipal Tax Receipt</h5>
                <input type="file" className='inp'  onChange={(e)=>{
                     setmunicipal_tax(e.target.files[0])
                }} ></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>HSN codes of the products selling or SAC codes of the services providing</h5>
                <input type="text" className='inp'  onChange={(e)=>{
                     sethsn_code(e.target.value)
                }}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Complete address of the registered office</h5>
                <input type="text" className='inp'  onChange={(e)=>{
                     setoffice_address(e.target.value)
                }}></input>
            </div>
            <div className='field'>
                <h5  style={{color:"black",fontWeight:"bolder"}}>Complete Residential address of the proprietor</h5>
                <input type="text" className='inp'  onChange={(e)=>{
                     setresidential_address(e.target.value)
                }}></input>
            </div>
            <button type='submit'>Submit Form</button>
            </form>
            </div>
        </div>
    </div>
        </>)
    }
    
    </>
  )
}

export default Gstregis_form