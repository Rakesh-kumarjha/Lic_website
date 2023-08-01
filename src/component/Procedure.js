import React from 'react'
import Img from "../Images/Documents.jpg"
import Img1 from "../Images/Pre-Requisites.jpg"
import Img2 from "../Images/Post Exam.jpg"
import Img3 from "../Images/Proseger.jpg"

const Procedure = () => {
  return (
    <div>
    <img src={Img3} alt='' width="100%" height="5%"/>
    <h2 className=' flex justify-center pt-20'>PROCEDURE FOR BECOMING AGENT</h2>
    <br></br>
    <hr></hr>
      <div class="containers">
    <div class="card " margen-right="20px">
      <div class="card-header">
        <img src={Img} alt="" />
      </div>
      <div class="card-body">
       
        <h4>Documents Required</h4>
       <ol>
        <li>1. Passport size photo</li>
        <li>2. Aadhar Card</li>
        <li>3. Pan Card</li>
        <li>4. Bank Account</li>
        <li>5. Driving License</li>
        <li>6. SSLC Marksheet</li>
        <li>7. Bangalore Address Proof</li>
       </ol>
       
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <img src={Img1} alt="" />
      </div>
      <div class="card-body">
       
        <h4>Pre-Requisites</h4>
       
        <li>Study Material-Free</li>
       <li>Exam Fee (RS 503/-)</li>
       <li>Book convenient slots for</li>
       <li>IRDA exam(1 hour)</li>
       <li>Min pass mark (18/50)</li>
      
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <img src={Img2} alt="" />
      </div>
      <div class="card-body">
      
        <h4>Post Exam</h4>
        <p>
             On successful completion of exam  you receive Appointment letter and  IRDA license and you start your dream career
        </p>
        {/* <div class="user">
          <img src="https://3.bp.blogspot.com/--sCpJJGYWEA/W2P4C51CYSI/AAAAAAAAQcI/LR4U_--Wf1E3wz7RLZtmwBPObm_ky9tQQCLcBGAs/s1600/beautiful-indian-women-photos-1.jpg" alt="" />
          <div class="user-info">
            <h5>Carrie Brewer</h5>
            <small>23 Dec 2020</small>
          </div>
        </div> */}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Procedure
