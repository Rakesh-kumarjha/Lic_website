import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "../App.css"
import { IoMdCall,IoMdMail } from "react-icons/io";
import {FaFacebook,FaInstagram, FaTwitterSquare, FaLinkedin, FaPinterestSquare} from "react-icons/fa"

const Footer = () => {
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-about">
                <h2>About Us</h2>
                <p className='text-white'>
                Every day we wake up to the fact that more than 250 million lives are part of our family called Life Insurance Corporation.
We are humbled by the magnitude of the responsibility we carry and realise the lives that are associated with us are very valuable indeed.
                </p>
                <div className="footer-social">
                  <Link onClick={handleTopBtnClick} to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="https://www.facebook.com/shoolinconsultancy5?mibextid=ZbWKwL" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="https://instagram.com/shoolinconsultancyofficial?igshid=MzRlODBiNWFlZA==" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link onClick={handleTopBtnClick} to="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-9">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <div className="footer-link ">
                    <h2>City Agent Career</h2>
                    <Link onClick={handleTopBtnClick}  to="/Licagent" className='no-underline'>
                    LIC agent in Bangalore</Link>
                  
      

                    <Link onClick={handleTopBtnClick} to="/FreePension" className='no-underline'>
                    Lic agency as Free Pension</Link>
                    <Link onClick={handleTopBtnClick} to="/Milestone" className='no-underline'>
                    Lic Milestone agents
                    </Link>
                    
                    <Link onClick={handleTopBtnClick} to="/Working" className='no-underline'>
                    Lic agent work mechanism</Link>
                    
                    <Link onClick={handleTopBtnClick} to="/Who" className='no-underline'>
                    Who can become Lic agent in Bangalore</Link>
                    

                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="footer-link">
                    <h2>Useful Pages</h2>
                    <Link onClick={handleTopBtnClick} to="/Aboutus" className='no-underline'>About Us</Link>
                    <Link onClick={handleTopBtnClick} to="/Benefits"  className='no-underline'>Benefits</Link>
                    <Link onClick={handleTopBtnClick} to="Apply_Online" className='no-underline'>Apply Online</Link>
                    <Link onClick={handleTopBtnClick} to="Achievers" className='no-underline'>Achievers</Link>
                    <Link onClick={handleTopBtnClick} to="Contactus" className='no-underline'>Contact US</Link>
                  </div>
                </div>
                 






                <div className="col-md-6 col-lg-4">
                  <div className="footer-contact">
                    <h2>Get In Touch</h2>
                    <Link onClick={handleTopBtnClick} to="https://goo.gl/maps/TUkHHczq16KXuLQx9" target="_blank" className='no-underline' color='white'>
                      <p className='colors text-white '>
                        <i className="fa fa-map-marker-alt"></i>Darshan Prime Agency Anugraha Layout, Ramanashree Enclave, Bilekahalli, Bengaluru, Karnataka 560076
                      </p>
                    </Link>

                    <p className='colors '>
                      <Link  to="tel:9108166064" className='no-underline'> 
                      <IoMdCall/> <p className='text-white ml-5 -mt-5'> 9108166064</p>
                      </Link>
                    </p>
                    <p className='colors '>
                      <Link  to="tel:8095882225" className='no-underline'> 
                      <IoMdCall/> <p className='text-white ml-5 -mt-5'> 8095882225</p>
                      </Link>
                    </p>
                    <p className='colors'>
                      <Link to="mailto:Hr@darshanprime.com" className='text-white no-underline '>
                      <IoMdMail/><p className='text-white ml-5 -mt-5'>  Hr@darshanprime.com</p></Link>
                    </p>
                  <div className='space-x-4 flex '>
                  <Link to="https://www.instagram.com/darshan_prime_agency/" className="text-red-600 hover:text-blue-800  md:inline-block" target="_blank">
          <FaInstagram className="text-2xl" />
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=100095363170301" className="text-blue-500 hover:text-blue-600  md:inline-block" target="_blank">
          <FaFacebook className="text-2xl" />
        </Link>
        <Link to="https://twitter.com/Darshan_Prime" className="text-blue-400 hover:text-blue-500  md:inline-block" target="_blank">
          <FaTwitterSquare className="text-2xl" />
        </Link>
        <Link to="https://www.linkedin.com/company/98424029/admin/feed/posts/" className="text-blue hover:text-blue-500  md:inline-block" target="_blank">
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link to="https://in.pinterest.com/Darshan_Prime_Agency/" className="text-red-600 hover:text-blue-500  md:inline-block" target="_blank">
          <FaPinterestSquare className="text-2xl" />
        </Link>
                  </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
     

      </div>
    </div>
  )
}

export default Footer