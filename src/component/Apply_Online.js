import React, { useState } from 'react'
import {AiOutlineStar,AiFillFacebook,AiFillTwitterSquare,AiFillPlusSquare} from "react-icons/ai";

const Apply_Online = () => {
 
    const [formData, setFormData] = useState({
      name: "",
      location: "",
      mobile: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission or validation here
      console.log(formData);
    };
  return (
    <div>
    <div className='city'>
    <h1><b>Apply Online for LIC Agency in Bangalore</b></h1>
    </div>
    <div class="container mx-auto p-4 rounded-lg">
    <h1 class="text-1sm font-semibold mb-6">Apply Online for LIC Agency</h1>
    <form className="flex flex-col p-4 space-y-4" onSubmit={handleSubmit}>
    <div className="flex flex-col">
      <label className="text-sm font-medium" htmlFor="name">
        Name<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border rounded-md px-3 py-2 outline-none focus:ring focus:border-blue-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium" htmlFor="location">
        Location<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        className="border rounded-md px-3 py-2 outline-none focus:ring focus:border-blue-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium" htmlFor="mobile">
        Mobile<span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
        className="border rounded-md px-3 py-2 outline-none focus:ring focus:border-blue-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium" htmlFor="email">
        Email<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border rounded-md px-3 py-2 outline-none focus:ring focus:border-blue-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm font-medium" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="border rounded-md px-3 py-2 outline-none focus:ring focus:border-blue-500"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
    >
      Submit
    </button>
  </form>
  <h2> Documents Required to be LICI Agent</h2>
  <ol class="list-decimal list-inside text-justify">
  <li>PAN</li>
  <li>ADHAR</li>
  <li>EDUCATION PROOF</li>
  <li>BIRTH PROOF</li>
  <li>PHOTOS</li>
  <li>SIGN</li>
  </ol>
  <h6>All documents should be scanned and sent to us the official email ID that you will get after filling contact form.</h6>
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
  )
}

export default Apply_Online
