import { Outlet } from "react-router-dom";
import React from 'react'
import './Layout.css';
const Layout = () => {

  return <div>
            <div class="header">
              <div class="logoPane">
                  <img class="logoImage" src="./Android.png" alt="Logo"/>
                  <div class="healthHub">Health Hub</div>
              </div>

              <div class="navBar">
                  
                  
                  <div class="navButtons">
                      <button onclick="location.href='home.html'" id="homeBtn" class="navBtn">Home</button>
                      <button onclick="location.href='courses.php'" class="navBtn">Courses</button>
                      <button class="navBtn">Timetables</button>
                      <button onclick="location.href='payments.php'" class="navBtn">Payment</button>
                      <button onclick="location.href='about.html'" class="navBtn">About Us</button>
                      
                      
                  </div>
                  
                  
                  
                  <div class="navSearch">

                      
                      <div class="searchFull">
                      <img id="searchGlass"src="./search.png" alt="search" width="15px" height="15px"/>
                      <input id="searchbar" type="text" placeholder="Search.."/>
                      </div>

                  </div>
              </div>

            </div>
            <Outlet/>
            <div></div>
          </div>
}

export default Layout