import React from 'react'
import Carousels from '../Pages/Carousels'
import "../style/Home.css"
import Navbar from "../Pages/Navbar";
import Img from "../Images/slider.jpg";
import {Link } from "react-router-dom"
 


const Home = () => {
  return (
    <div>
      
      <Carousels/>
<div className='Contaier'>
  <h2 className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pt-20'>About us</h2>
</div>
<div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="about-img" data-aos="fade-right" data-aos-duration="1000">
                  <img src={Img} alt="Image" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 classs" >
                <div className="section-header">
                
                </div>
                <div className="about-text" data-aos="fade-up" data-aos-duration="1000">
                <h3 className='flex justify-center'> Join our Team</h3>
                  <p className='flex justify-center'> Start your career as LIC advisor</p>
                  <p></p>
                  <button class="button "><span><Link href="tel:xxxxxxxxxx" className='text-black flex justify-center'>Call Now</Link> </span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
        <div className="container">
          <div className="right">
            <div className="row align-items ">
              <div className="col-lg-5 col-md-6">
                <div className="about-img"   >
                  <img src={Img} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header " >
                  <h2>ABOUT US</h2>
                </div>
                <div className="about-text" >
                  <h5></h5>
                  <ul>
                  <li>LIC is the No. 1 brand in service sector and 240 million + lives are part of LIC of India.</li>
                  
                  <li>Best infrastructure – 2048 LIC branches (fully computerized) 1275 satellite offices, more than 1.16 lac employees and 11.72 lac agents.</li>
                  </ul>
                  <p></p>
                  {/* <a className="btn" href="">
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="about-img" data-aos="fade-right" data-aos-duration="3000">
                <img src={Img} alt="Image" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="section-header" data-aos="fade-down" data-aos-duration="3000">
                <h2>ABOUT US</h2>
              </div>
              <div className="about-text" data-aos="fade-up" data-aos-duration="3000">
              <ul>
               <li>Best practices in the industry</li>
               <li>Excellent claim settlement ratio</li>
               <li> Sovereign guarantee to customers</li>
</ul>
             
               
                {/* <a className="btn" href="">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="right">
            <div className="row align-items ">
              <div className="col-lg-5 col-md-6">
                <div className="about-img"   >
                  <img src={Img} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header" >
                  <h2>ABOUT US</h2>
                </div>
                <div className="about-text" >
                <ul>
                  <li>LIC policy for all segment</li>
              
                  <li>Transparency operations.</li>
            
                  <li>LIC is the biggest life insurer in the world.</li>
                  </ul>
                  <p></p>
                  {/* <a className="btn" href="">
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div>
        <h1 className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pt-20'>VIDEO</h1>
<h5 className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 '>Check out this great video</h5>
      </div>
      <div className='Voides'>
      <iframe width="100%" height="700px" src="https://www.youtube.com/embed/9g2Em1sONHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen></iframe>
      </div>
     
    </div>
  )
}

export default Home
