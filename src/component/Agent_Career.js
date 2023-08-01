import React from 'react'
import Img from "../Images/about3.webp"
import "../style/Agent_Career.css"

const Agent_Career = () => {
  return (
    <div>
    <div> 
    <img src="" alt=''/>
    </div>
    <h1 >CAREER IN LIC OF INDIA</h1>
    <div>
    <div class="containers">
    <div class="card " margen-right="20px">
      <div class="card-header">
        <img src={Img} alt="" />
      </div>
      <div class="card-body">
        <span class="tag tag-teal">Title</span>
        <h4>Sub Title</h4>
        <p>
         content
        </p>
        {/* <div class="user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
          <div class="user-info">
            <h5>Jerome Walton</h5>
            <small>2h ago</small>
          </div>
        </div> */}
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <img src={Img} alt="" />
      </div>
      <div class="card-body">
        <span class="tag tag-purple">Title</span>
        <h4>Sub Title</h4>
        <p>
         content
        </p>
        {/* <div class="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSft5PLhaSb6QUdT0yRu3rjlam1Rt--WDJ6yQ&usqp=CAU" alt="" />
          <div class="user-info">
            <h5>Lewis Daniels</h5>
            <small>Yesterday</small>
          </div>
        </div> */}
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <img src={Img} alt="" />
      </div>
      <div class="card-body">
        <span class="tag tag-pink">Title</span>
        <h4>Sub Title</h4>
        <p>
         content
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

      
    </div>
  )
}

export default Agent_Career
