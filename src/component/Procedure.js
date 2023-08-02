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
       <ul>
        <li>150 Registration Fees.</li>
       <li>150 Online Training Fees. </li>
       <li>500 IRDA Examination Fee.</li>
       <li>200 for Study material</li>
       <li>Total:  1000    </li>
       <li>Min pass mark (18/50)</li>
       </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <img src={Img2} alt="" />
      </div>
      <div class="card-body">
      
        <h4>Selection Process</h4>
        <p className='flex text-justify'>
        Fill up the application form at end of seminar or apply online on www.licguru.in
       
        Appear for Personal Interview.
        Appear for Aptitude Test.
       After selection you have to undergo Induction Training once in a week spread over one month and complete assignments given.
        Passing of IRDA Examination.
        Issue of Appointment Letter By LIC of India.
        You will be attached to LIC of India Bhandup (w) Branch Mumbai.</p>
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
