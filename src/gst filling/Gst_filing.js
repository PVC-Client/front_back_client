
import React, { useState } from 'react'
import './gst_filing.css'
import axios from 'axios'
import Loader from '../loader/Loader'

const Gst_filing = () => {


    const [your_name, setyour_name] = useState()
    const [dob, setdob] = useState()
    const [mob_number, setmob_number] = useState()
    const [email, setemail] = useState();
    const [father_name, setfather_name] = useState();
    const [pan_number, setpan_number] = useState();
    const [pan_photo, setpan_photo] = useState()
    const [bank_statement, setbank_statement] = useState()

    const [lic_premium, setlic_premium] = useState();

    const [medical_insurance, setmedical_insurance] = useState()
    const [aadhar_no, setaadhar_number] = useState()
    const [aadhar_photo, setaadhar_photo] = useState()
    const [loan_statement, setloan_statement] = useState();
    const [donation_receipt, setdonation_receipt] = useState();
    const [property, setproperty] = useState();
    const [curr_address, setcurr_address] = useState()
    const [permanent_address, setpermanent_address] = useState()
    const [form_16, setform_16] = useState();

    let formdata = new FormData();
    formdata.append('your_name', your_name)
    formdata.append('dob', dob)
    formdata.append('mob_number', mob_number)
    formdata.append('email', email)

    formdata.append('father_name', father_name)

    formdata.append('pan_number', pan_number)
    formdata.append('pan_photo', pan_photo)
    formdata.append('bank_statement', bank_statement)
    formdata.append('lic_premium', lic_premium)
    formdata.append('medical_insurance', medical_insurance)
    formdata.append('aadhar_no', aadhar_no)
    formdata.append('aadhar_photo', aadhar_photo)
    formdata.append('loan_statement', loan_statement)
    formdata.append('donation_receipt', donation_receipt)
    formdata.append('property', property)
    formdata.append('curr_address', curr_address)
    formdata.append('permanent_address', permanent_address)

    formdata.append('form_16', form_16)

    const [loding, setLoding] = useState(false);

    const handelSumnit = (e) => {

        e.preventDefault();

        setLoding(true)
        axios.post('/gst_filling/registration', formdata).then((res) => {
            setLoding(false)
            if(res.status===201){
                alert("successfull")
            }else{
                alert("Unsuccessfull !")
            }
        }).catch((e) => {
            setLoding(false)
            alert("Unsuccessfull")
        })
       
        // setyour_name("")
        // setdob("")
        // setmob_number("")
        // setemail("")
        // setfather_name("")
        // setpan_number("")
        // setpan_photo("")
        // setbank_statement("")
        // setlic_premium("")
        // setmedical_insurance("")
        // setaadhar_number("")
        // setaadhar_photo("")
        // setloan_statement("")
        // setdonation_receipt("")
        // setproperty("")
        // setcurr_address("")
        // setpermanent_address("")
        // setform_16("")







    }



    return (<>

        {
            loding?(<>
        <Loader></Loader>
                </>): (<>
    <div className='gst_fill'>
        <div className='head'>
            <h1>GST FILING Form</h1>
        </div>
        <div className='content'>
            <div className='inside_content'>
                <h1 className='mx-auto w-25 pt-1' style={{ padding: "10px 0" }}>DETAILS</h1>
                <hr></hr>
                <form onSubmit={handelSumnit}>

                    <div className='field pt-4'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>YOUR NAME</h5>
                        <input type="text" className='inp' value={your_name} name='your_name' onChange={(e) => {
                            setyour_name(e.target.value)
                        }}></input>
                    </div>

                    <div className='field pt-4'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>DATE OF BIRTH</h5>
                        <input type="date" className='inp' value={dob} name='dob' onChange={(e) => {
                            setdob(e.target.value)
                        }}></input>
                    </div>


                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Phone Number</h5>
                        <input type="number" className='inp' value={mob_number} name='mob_number' onChange={(e) => {
                            setmob_number(e.target.value)
                        }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Email</h5>
                        <input type="email" className='inp' value={email} name='email' onChange={(e) => {
                            setemail(e.target.value)
                        }}></input>
                    </div>

                    <div className='field pt-4'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>FATHER'S NAME</h5>
                        <input type="text" className='inp' value={father_name} name='father_name' onChange={(e) => {
                            setfather_name(e.target.value)
                        }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>PAN Number</h5>
                        <input type="text" className='inp' value={pan_number} name='pan_number' onChange={(e) => {
                            setpan_number(e.target.value)
                        }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Pan Card Photo</h5>
                        <input type="file" className='inp' 
                            name='pan_photo' onChange={(e) => {
                                setpan_photo(e.target.files[0])
                            }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>BANK STATEMENT FROM 1-4-21 TO 31-2-22</h5>
                        <input type="file" className='inp' 
                            name='bank_statement' onChange={(e) => {
                                setbank_statement(e.target.files[0])
                            }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>LIC PREMIUM IF PAID</h5>
                        <input type="file" className='inp' 
                            name='lic_premium' onChange={(e) => {
                                setlic_premium(e.target.files[0])
                            }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>MEDICAL INSURANCE DETAILS IF PAID</h5>
                        <input type="file" className='inp' 
                            name='medical_insurance' onChange={(e) => {
                                setmedical_insurance(e.target.files[0])
                            }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>AADHAR Number</h5>
                        <input type="number" className='inp'  name='aadhar_number' onChange={(e) => {
                            setaadhar_number(e.target.value)
                        }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>AADHAR PHOTO</h5>
                        <input type="file" className='inp' 
                            name='aadhar_photo' onChange={(e) => {
                                setaadhar_photo(e.target.files[0])
                            }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Loan statement stating interest and principal repaid during the last financial year(if had any)</h5>
                        <input type="file" className='inp' 
                            name='loan_statement' onChange={(e) => {
                                setloan_statement(e.target.files[0])
                            }}></input>
                    </div>


                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Donation reciepts if made</h5>
                        <input type="file" className='inp' 
                            name='donation_receipt' onChange={(e) => {
                                setdonation_receipt(e.target.files[0])
                            }}></input>
                    </div>

                    <div className='field pt-4'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Any Properties and Assests registered
                            on yor name</h5>
                        <input type="text" className='inp' name='property' onChange={(e) => {
                            setproperty(e.target.value)
                        }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Complete Current Address</h5>
                        <input type="text" className='inp'  name='curr_address' onChange={(e) => {
                            setcurr_address(e.target.value)
                        }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Complete Permanent Address</h5>
                        <input type="text" className='inp' name='permanent_address' onChange={(e) => {
                            setpermanent_address(e.target.value)
                        }}></input>
                    </div>

                    <div className='field'>
                        <h5 style={{ color: "black", fontWeight: "bolder" }}>Form 16</h5>
                        <input type="file" className='inp' 
                            name='form_16' onChange={(e) => {
                                setform_16(e.target.files[0])
                            }}></input>
                    </div>


                    <button type='submit'>Submit Form</button>
                </form>
            </div>
        </div>

    </div>
</>
)
            }
      

   </> )
}


export default Gst_filing
