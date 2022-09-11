import React, { useEffect } from 'react'
import Cards_left from './cards/Cards_left';
import Cards_right from './cards/Cards_right';
import './compilance.css';
import accounting_img from './images/acc_img.jpeg';
import digital from './images/Digital.jpeg';
import imp_img from './images/import_exp.jpeg';
import company from './images/company.jpeg';
import tan from './images/tan.jpeg';
import bar from './images/bar.jpeg';
import iso from './images/iso.jpeg';
import shop from './images/shop.jpeg';
import fsai from './images/fssai.jpeg';
import itr from './images/itr.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Compilance = () => {
  useEffect(() => {
      
    AOS.init({
    offset:100,
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    // whether elements should animate out while scrolling past them
    });
    
  });
  return (
    <div className='compilance'>
        <div className='head'>
       <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="100">Compilance</h1>
</div>
<div className='content'>
    <Cards_left image={accounting_img}
    title="Accounting services"
    desc="Accounting services is related to your business or company. It is one of the most important part of any type of the company or business in India. In the accounting ,we have to interpreting the financial records to make the strategic decision in the business like turnover related, expenses related etc."
    ></Cards_left>
    <Cards_right image={digital}
    title="Digital signatures"
    desc="Digital signatures increase the transparency of online interactions and develop trust between customers, business partners, and vendors. Digital signatures create a virtual fingerprint that is unique to a person or entity and are used to identify users and protect information in digital messages or documents. Digital signatures are significantly more secure than other forms of electronic signatures."
    ></Cards_right>
    <Cards_left image={imp_img}
    title="Import Export Code"
    desc="Import and Export code is a 10 digit unique number issued by the Directorate General of Foreign Trade (DGFT) to a business entity for import and export in India. The Import and Export Code helps the business grow in the global market. To clear customs, the trader must ensure that the importing entity has IE code and GST registration before initiating import of goods."
    ></Cards_left>
    <Cards_right image={company}
    title="Company PAN card"
    desc="A Permanent Account Number known as PAN is a vital document for any taxpayer. It is a unique 10-character string of letters and digits. PAN card requirements are detailed in the Income Tax Act of 1961. A Pan Card is a mandatory requirement for all tax-paying individuals, partnerships, companies, etc. It also serves as an identity proof for a number of purposes."
    ></Cards_right>
    <Cards_left image={tan}
    title="Company TAN number"
    desc="TAN or Tax Deduction and Collection Account Number is a 10 digit alpha numeric number required to be obtained by all persons who are responsible for deducting or collecting tax. Under Section 203A of the Income Tax Act, 1961, it is mandatory to quote Tax Deduction Account Number (TAN) allotted by the Income Tax Department (ITD) on all TDS returns."
    ></Cards_left>
    <Cards_right image={bar}
    title="Bar Code"
    desc="Barcodes are vertical lines representation that can be scanned electronically to fetch the product details faster. Barcode is used to encode the product details instantly such as product numbers, serial numbers, and batch numbers."
    ></Cards_right>
    <Cards_left image={iso}
    title="ISO 9001"
    desc="ISO 9001 certification provides your customers reassurance that you have established a Quality Management System based on the seven quality management principles of ISO 9001. ISO 9001:2015 is an internationally recognized standard for creating, implementing, and maintaining a Quality Management System for a company. It is intended to be used by organizations of any size or industry, and it can be used by any company. As an international standard, it is recognized as the basis for any company to create a system to ensure customer satisfaction and improvement and, as such, many corporations require this certification from their suppliers."
    ></Cards_left>
    <Cards_right image={shop}
    title="Shop Act"
    desc="The Shop and Establishment Act is regulated by the Department of Labor and regulates premises wherein any trade, business or profession is carried out. The act not only regulates the working of commercial establishments but also societies, charitable trusts, printing establishments, educational institutions run for gain and premises in which banking, insurance, stock or share brokerage. This act regulates areas such as working hours, rest interval for employees, opening and closing hours, closed days, national and religious holidays, overtime work, rules for employment of children, annual leave, maternity leave, sickness and casual leave, etc.,"
    ></Cards_right>
      <Cards_left image={fsai}
    title="FSSAI"
    desc="The Food Safety and Standards Authority of India (FSSAI) has been established under Food Safety and Standards, 2006 which consolidates various acts & orders that have hitherto handled food related issues in various Ministries and Departments. FSSAI has been created for laying down science based standards for articles of food and to regulate their manufacture, storage, distribution, sale and import to ensure availability of safe and wholesome food for human consumption."
    ></Cards_left>
    <Cards_right image={itr}
    title="ITR Filing"
    desc="Income Tax Return (ITR) is a form which a person is supposed to submit to the Income Tax Department of India. It contains information about the person’s income and the taxes to be paid on it during the year. Information filed in ITR should pertain to a particular financial year, i.e. starting on 1st April and ending on 31st March of the next year."
    ></Cards_right>

</div>
    </div>
  )
}

export default Compilance