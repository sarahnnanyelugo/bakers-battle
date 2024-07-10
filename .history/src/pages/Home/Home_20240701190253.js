import React from "react";
import "./home.scss";
export const Home = () => {
  return (
    <div class="container col-md-12">
      <h1>
        <a href="#menu">Click me</a>
      </h1>

      <div class="popover" id="menu">
        <div class="content">
          <a href="#" class="close"></a>
          <div class="nav">
            <ul class="nav_list">
              <div class="nav_list_item">
                <li>
                  <a href="#">Home</a>
                </li>
              </div>
              <div class="nav_list_item">
                <li>
                  <a href="#">About</a>
                </li>
              </div>
              <div class="nav_list_item">
                <li>
                  <a href="#">Products</a>
                </li>
              </div>
              <div class="nav_list_item">
                <li>
                  <a href="#">Services</a>
                </li>
              </div>
              <div class="nav_list_item">
                <li>
                  <a href="#">Contact</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
