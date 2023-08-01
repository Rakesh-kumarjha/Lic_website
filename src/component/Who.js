import React from 'react';
import {AiOutlineStar,AiFillFacebook,AiFillTwitterSquare,AiFillPlusSquare} from "react-icons/ai";
import "../component/Style.css";
import img from "./img3.jpg"
import img1 from "./city.jpg";


const Who = () => {
  return (
    <div>
      <div className='city'>
      <h1><b>Who Can Join LIC as an Agent in Bengaluru</b></h1>
      </div>
      <img className='mt-2' src={img}/>
      <div class="container mx-auto p-4 rounded-lg">
  
        <h1 class="text-3xl font-bold mb-4">Who Can Join LIC as an Agent</h1><br></br>
        <ul>
        <li>First ,One who have a burning desire to be prosperous.</li>
        <li>Second,One who have capacity to work hard</li>
      </ul>
      <h1 class="text-2xl  mb-4">What is Eligibility to be City Career Agent in LIC?
        </h1>
        <ul>
        <li>Minimum Age completed 18 years.</li>
        <li>Minimum Age completed 18 years.</li>
        </ul>
        <h1 class="text-2xl  mb-4">(Who want extra Income in free time like)?</h1>
        <p className='mx-auto p-4'>Tax Consultants,Post Agents,Pigmy Agents,Students,Accountants, Housewives, Businessmen,  Unemployed, Self-employed, Working in a Pvt.Firm in any department etc.</p>
        <p className='mx-auto p-4'>Any one can become LIC Agent one who have soft skill of sales .</p>
        <h1 class="text-2xl  mb-4">Eligibility to be LIC agent In Bengaluru:
       </h1>
      
        <ul>
        <li>Minimum 10th Pass</li>
        <li>Minimum Age 18 years completed</li>
        </ul>
       
        <img  src={img1} alt="img2"/>
     
       
       <h1 class="text-1xl font-bold mb-4">Like this:</h1>
       <button class="flex items-center border border-blue-500 hover:border-blue-700  hover:bg-blue-700 font-bold py-2 px-4 rounded">
   <AiOutlineStar/> Like
    </button>
    <h1 class="text-1xl  mb-4">Be the first to like this.</h1>
    <div class="flex items-center h-90 w-90">
    <AiFillFacebook  class="h-10 w-10 text-blue-500" />
    <AiFillTwitterSquare class="h-10 w-10 text-blue-500"/>
    <AiFillPlusSquare class="h-10 w-10 text-blue-500"/>
    </div>
   

  
</div>
</div>
  );
}

export default Who;
