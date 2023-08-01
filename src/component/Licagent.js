import React from 'react';

import {AiOutlineStar,AiFillFacebook,AiFillTwitterSquare,AiFillPlusSquare} from "react-icons/ai";
const Licagent = () => {
  return (
    <div>
    <div className='city'>
    <h1><b>LIC Agent in Bangalore</b></h1>
    </div>
    <div class="container mx-auto p-4 rounded-lg">
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

export default Licagent;
