import { Outlet } from "react-router-dom";
import React from 'react'
import './Layout.css';

const Layout = () => {

  return <div class="page">
            <div class="header">
              <div class="logoPane">
                  <img class="logoImage" src="/Android.png" alt="Logo"/>
                  <div class="healthHub">Health Hub</div>
              </div>

              <div class="navBar">
                  
                  
                  <div class="navButtons">
                      <button id="homeBtn" class="navBtn">Home</button>
                      <button class="navBtn">Customer Support</button>
                      <button class="navBtn">Find a Doctor</button>
                      <button class="navBtn">Pharmacy</button>
                      <button class="navBtn">Fitness</button>
                      <button class="navBtn">Resources</button>
                      
                  </div>
                  
                  
                  
                  <div class="navSearch">

                      
                      <div class="searchFull">
                      <img id="searchGlass"src="/search.png" alt="search" width="15px" height="15px"/>
                      <input id="searchbar" type="text" placeholder="Search.."/>
                      </div>

                  </div>
              </div>

            </div>
            <div class='background'>
              <Outlet/>
              <div class="footer">
                <div class="footerItem"> Terms of Service </div>
                <div class="footerItem"> Privacy Policy </div>
                <div class="footerItem"> Contact Us </div>
              </div>
            </div>
          </div>
}

export default Layout