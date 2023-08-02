import React from 'react';
import {AiOutlineStar,AiFillFacebook,AiFillTwitterSquare,AiFillPlusSquare} from "react-icons/ai";
import "../component/Style.css";
import img1 from "./city.jpg";
import img2 from "./Stipend.jpg";
import vid1 from "./video.mp4";
import { Link } from 'react-router-dom';
const Cityagent = () => {
  return (
    <div>
      <div className='city'>
      <h1 className='flex justify-center'><b>City Career Agent</b></h1>
      </div>
      <img className="" src={img1} width="100%"/>
      <div class="container mx-auto p-4 rounded-lg">
      
        <h1 className="text-3xl font-bold mb-4">LIC City Career Agent</h1><br></br>
        <p className="text-gray-600">Usually LIC agent works on commission basis which depends on the premium and Policy Term of LIC policy. As a part time job you can earn huge as commission and also a Fixed income is great option.</p><br></br>
        <p className="text-gray-600">LIC has introduced New LIC AGENT Recruitment scheme in Urban area of country in the form of CITY Career Agent. Now Newly Recruited LIC agent will get monthly remuneration as well as commission also.</p><br></br>
        <p className="text-gray-600">If you want to become LIC agent or you are interested to make career in LIC then it’s a great opportunity for you.</p><br></br>
        <h1 className="text-2xl font-bold mb-4">Who can be City Career Agent in LIC of India?
        </h1><br></br>
        <ul>
        <li>Housewife,Who want to be self dependent on earning.</li>
        <li>Employed, who have few spear time to work.</li>
        <li>Retired or VRSopted person for any organization</li>
        <li>Professional like Teacher, Actor, CS, CA, Dr etc</li>
        <li>Student, who want earn own pocket Money.</li>
      </ul>
      <h1 className="text-2xl  mb-4">What is Eligibility to be City Career Agent in LIC?
        </h1>
        <ul>
        <li>Minimum Age completed 18 years.</li>
        <li>Minimum Age completed 18 years.</li>
        </ul>
       <h1 className="text-2xl  mb-4">What is selection Procedure to be City Career Agent?
        </h1>
        <ul>
        <li>Walk in Interview with updated Resume.</li>
        <li>Training for selected person.</li>
        <li>IRDA online Exam by NSEIT.</li>
        </ul>
        <h1 className="text-2xl  mb-4">Required documents needed to be City Career Agent?
        </h1>
        <ul>
        <li>Cancelled Cheque.</li>
        <li>Photo.</li>
        <li>Qualification proof.</li>
        <li>Residential Proof.</li>
        <li>Age Proof.</li>
        <li>PAN.</li>
        </ul>
        <h1 className="text-3xl  mb-4">What is Minimum Business required Target for City Career Agent?</h1>
        <p>Having selected as City Career Agent you have to achieve minimum target for one year as below.</p>
        <Link href="https://google.com">
        <img className="img2" src={img2} alt="img2"/>
        </Link>
       <p>As you can see form first month you have to earn Rs 1200 as Commission with one live means one policy. Like wise every month you have to achieve.</p>
       <div className='video'>
       <video controls autoPlay muted loop src={vid1} height="5%" width="100%"/>
       </div>
       <hr></hr>
       <h1 className="text-1xl font-bold mb-4">Like this:</h1>
       <button className="flex items-center border border-blue-500 hover:border-blue-700  hover:bg-blue-700 font-bold py-2 px-4 rounded">
   <AiOutlineStar/> Like
    </button>
    <h1 className="text-1xl  mb-4">Be the first to like this.</h1>
    <div className="flex items-center h-90 w-90">
    <AiFillFacebook  className="h-10 w-10 text-blue-500" />
    <AiFillTwitterSquare className="h-10 w-10 text-blue-500"/>
    <AiFillPlusSquare className="h-10 w-10 text-blue-500"/>
    </div>
   

  
</div>
</div>
  );
}

export default Cityagent;
