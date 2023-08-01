import React from 'react'
import Img from "../Images/Benefits.webp"
const Benefits = () => {
  return (
    <div>
    <div>
      <img src={Img} alt='' width="100%" height="500px"/>
    </div>
    <div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-6">
              <h2>Key Benefits</h2>
              <li>Flexible working hours</li>
              <li>Assured future income after 5years of service</li>
              <li>Assured HRC(Hereditary Renewal Commission) income to spouse & children after 10years of service</li>
              <li>Housing loan at subsidized interest rate</li> 
              <li>Interest free loan for  2-4 wheeler, festival, marriage, computer /laptop depending on class of agent </li>
              <li>Freelancing career opportunity</li>
              <li>Win an entry chance in insurance field with/without formal education</li>
              <li>Unlimited income compensating your work in the form of commission payable monthly/bimonthly</li>
              <li>Gratuity up to 2lakh</li>
              <li>Mediclaim Rs 50000-200000 depending on class of agent</li>
              <li>Group Insurance</li>
              <li>Foreign trips sponsored by LIC</li>
              <li>International appreciation and acclaim for your performance</li>
              <li>Build a career in training with your vast experience</li>
              </div>
              <div className="col-lg-3 col-md-6 classs" >
                <div className="section-header">
                <h3>How to get Started?</h3>
                </div>
                <div className="about-text" data-aos="fade-up" data-aos-duration="1000">
                
                  <p>
                  Kindly fill in the (Join our team) form below and we shall get in touch with you.
                  </p>
                  <p></p>
                  <button class="button"><span><a href="tel:xxxxxxxxxx" className='text-black'>HELPLINE</a> </span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Benefits
