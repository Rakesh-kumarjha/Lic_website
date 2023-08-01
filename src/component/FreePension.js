import React from 'react';
import img1 from "./img5.jpg";
import img2 from "./img7.jpg";
import vid1 from "./video.mp4";
import {AiOutlineStar,AiFillFacebook,AiFillTwitterSquare,AiFillPlusSquare} from "react-icons/ai";

const FreePension = () => {
  return (
    <div>
    <div className='city'>
    <h1><b>
    LIC Agency as Free Pension</b></h1>
    </div>
    <img className="how mt-2" src={img1}/>
    <div class="container mx-auto p-4 rounded-lg">
   
      <h1 class="text-3xl font-bold mt-4">LIC Agency as Free Pension</h1><br></br>
      <p class="text-gray-600">Pension for what? Its for old age financial need, a financial stability even a financial freedom .Be A LIC agent you will get all the stuff without any cost. Normally pension   is a type of retirement plan which gives monthly income at retirement age. Now a day’s employers offer pensions very rarely. Now Government organizations also offer   pension but taking employees contribution. Government  pension scheme, the employer contributes some money to the annuity  plan while employees are working. The annuity will be paid , usually as a monthly check at retirement, after one reach a particular retirement age. If you are not taking LIC agency then as normal citizen few avenues are available for you in the market, where you have to invest money.</p><br></br>
      <h1 class="text-2xl font-bold mb-4">Like:
      </h1>
      <ul>
        <li>Government National Pension Scheme.</li>
        <li>LIC Jeevan Akshay.</li>
        <li>Private insurance company’s Equity linked Annuity scheme</li>
        <li>LIC Plan Jeevan NIDHI etc</li>
      </ul>
      <p class="text-gray-600">As a LIC agent, if you are working for 5years minimum, you will secure good amount renewal commission, you may treat it as pension. The amount of pension will depend on your choice or on your labour.
      </p><br></br>
      <p class="text-gray-600">Take a Example ,Suppose  you are LIC Agent and selling  1 policy in 1 week minimum rs 50,00 monthly mode(yrly  collected Premium would be Rs 60,000).</p>
      <img className="img2" src={img2} alt="img2"/>
      <p class="text-gray-600 mt-4">Note: We are considering only 48 weeks in a year in spite of 52 weeks. We all knows that LIC gives 35% of premium for 1st year,7.5% of Premium for 2nd and 3rd year thereafter 5% of premium  till policy holder pays to LIC of INDIA.</p>
      <p class="text-gray-600 mt-4">It shows whatever amount of premium, you will decide to sell in a week that will be your monthly income after 5years till the policy holder pay premium to LIC of India.</p>
      <video controls autoPlay muted loop src={vid1} height="5%" width="100%"/>
      <hr></hr>
      <h1 class="text-1xl font-bold mb-4">Like this:</h1>
       <button class="flex items-center border border-blue-500 hover:border-blue-700  hover:bg-blue-700 font-bold py-2 px-4 rounded">
   <AiOutlineStar/> Like
    </button>
    <h1 class="text-1xl  mb-4">Be the first to like this.</h1>
    <hr></hr>
    <h1 class="text-1xl font-bold mb-4">Related.</h1>
    <div class="flex flex-col sm:flex-row justify-between">
    <div className='mt-4'>
    <p>LIC Launched MOBILE APP for LIC Agent</p>
    <p>July 16, 2023</p>
    <p>In "Indian Insurance Market"</p>
    </div>
    <div className='mt-4'>
    <p> 
    What Is ERC for LIC agent?</p>
    <p>July 16, 2023</p>
    <p>In "Indian Insurance Market"</p>
    </div>
    <div className='mt-4'>
    <p>KYC requirement In LIC of India</p>
    <p>July 16, 2023</p>
    <p>In "Indian Insurance Market"</p>
    </div>
    </div>
    <div class="flex items-center mt-4 h-90 w-90">
    <AiFillFacebook  class="h-10 w-10 text-blue-500" />
    <AiFillTwitterSquare class="h-10 w-10 text-blue-500"/>
    <AiFillPlusSquare class="h-10 w-10 text-blue-500"/>
    </div>
    <b>Posted in:</b>
    <a href='#'> Indian Insurance Market, LIC agency in Bengaluru
    </a>
    </div>
    </div>
  );
}

export default FreePension;
