import React from 'react';
import img1 from "./city.jpg";
import img from "./img3.jpg";
import {AiOutlineStar,AiFillFacebook,AiFillTwitterSquare,AiFillPlusSquare} from "react-icons/ai";

const Working = () => {
  return (
    <div>
    <div className='city'>
    <h1><b>LIC Agent Work Mechanism</b></h1>
    </div>
    <img className='mt-2' src={img1}/>
    <div class="container mx-auto p-4 rounded-lg">
    
    <h1 class="text-3xl font-bold mb-4">LIC Agent Work Mechanism</h1>
    <p className='mb-4'>If you are thinking to be LIC agent and want to earn huge ,then you have to learn mechanism of this Business.</p>
    <p className='mb-4'>These questions may come to your mind ,</p>
    <p className='mb-4'>How LIC agency business is useful to you ?</p>
    <p className='mb-4'>How LIC agency works ?</p>
    <p className='mb-4'>Are you able to do this LIC Agent Job? Or it is below your level</p>
    <img src={img}/>
    <p className=' mt-4 mb-4'>Lets understand this fact.</p>
    <p className='mb-4'>Mr ‘X’ should buy Insurance but why ? because he needs Saving,Pention,Tax Benefits Etc.</p>
    <p className='mb-4'>Then Mr ‘X’ have lots of options available , he may park his money into Bank,Equity Market,Real estate etc.</p>
    <p className='mb-4'>But there is No Life Risk Cover would be there.</p>
    <p className='mb-4'>So Mr’X’ will go for either LIC Of India or any Pvt Organisation.</p>
    <p className='mb-4'>Obviously  Mr ‘X’ will take LIC Insurance product, because it is Govt flavoured Org.</p>
    <p className='mb-4'>In LIC of India ,only LIC Agent can sell LIC Policy .So its compulsory to Mr ‘X” to contact LIC agent for LIC policy.</p>
    <hr></hr>
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

export default Working;
