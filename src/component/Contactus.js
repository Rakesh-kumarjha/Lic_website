import React from 'react';

const Contactus = () => {
  return (
    <div>
      <h1 className='mb-5 mt-10 text-2xl font-bold  flex items-center justify-center text-center '>Contact Us</h1>
      <div className='flex flex-col lg:flex-row'>
        <section class=" min-h-screen flex pl-10 pr-5 pt-10 justify-center lg:w-1/2">
          <div class="container mx-auto max-w-3xl  p-8 ">

            <h2 class="text-2xl font-semibold mb-6 mt-0 lg:text-left text-center ">Drop us a line!</h2>
            <form>
              <div class="mb-4">
                <input placeholder='Name' type="text" id="name" name="name" class="w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500 border border-transparent bg-gray-100" required />
              </div>
              <div class="mb-4">
                <input placeholder="Email" type="email" id="email" name="email" class="w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500 border border-transparent bg-gray-100" required />
              </div>
              <div class="mb-4">
                <input placeholder='Contact Us' type="text" id="email" name="email" class="w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500 border border-transparent bg-gray-100" required />
              </div>
              <div class="mb-4">
                <textarea placeholder="Message" id="message" name="message" rows="4" class="w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500 border border-transparent bg-gray-100" required></textarea>
              </div>
              <div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition-colors duration-300">SEND</button>
              </div>
            </form>
            <p class="mt-6 text-sm text-center sm:text-left">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </div>
        </section>
        <section class="flex flex-col ml-0 mt-12 items-center lg:ml-10 py-10 ">
          <div class=" ">
            <h1 class="text-2xl font-semibold mb-6 lg:text-left text-center">Better yet, see us in person!</h1>
            <p class="mt-6 text-center sm:text-left">We love our customers, so feel free to visit during normal business hours.</p>
            <div id="wa-chat-btn-root" class=" whatsapp wa-chat-btn-fixed wa-splmn-chat-btn-offset border border-gray-500 mt-6 bg-gray-800 items-center flex justify-center  " style={{ display: "table" }}>
              <a href="https://wa.me/8016418339" target="_blank" class="flex items-center p-2 ">
                <img class="wa-chat-btn-icon-cta-big w-12  no-underline " alt="Whatsapp Chat Button" src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/image_6.4.png?816" />
                <span class="ml-2 text-white">Message us on Whatsapp</span>
              </a>
            </div>
            <h1 class="text-2xl font-semibold mb-6 mt-6 lg:text-left text-center">Darshan Prime</h1>
            <p class="mt-6">Anugraha Layout, Ramanashree Enclave, Bilekahalli, Bangalore 560076</p>
            <h1 class="text-2xl font-semibold mb-6 mt-6 lg:text-left text-center">Hours</h1>
            <div className='date mt-6'>
              <select name="SortBy" id="SortBy" data-default-sortby="manual">
                <option value="manual" selected="selected">Open today
                  10:00 am – 06:00 pm</option>
                <option value="best-selling">Monday 10:00 am – 06:00 pm</option>
                <option value="title-ascending">Tuesday 10:00 am – 06:00 pm</option>
                <option value="title-descending">Wednesday 10:00 am – 06:00 pm</option>
                <option value="price-ascending">Thrusday 10:00 am – 06:00 pm</option>
                <option value="price-descending">Friday 10:00 am – 06:00 pm</option>
                <option value="created-ascending">Sunday 10:00 am – 06:00 pm</option>
                <option value="created-descending">Sunday Closed</option>
              </select>
            </div>
          </div>
        </section>

      </div>
     
    </div>
  );
}

export default Contactus;
