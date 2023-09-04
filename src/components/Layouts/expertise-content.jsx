import React, { Component } from "react";
import Kotlin from "../../Assets/Kotlin-Vector.svg";
import HTML from "../../Assets/HTML5_Badge.svg";
import CSS from "../../Assets/CSS3_logo.svg";
import JavaScript from "../../Assets/javascript-1.svg";
import MySQL from "../../Assets/mysql-logo-svgrepo-com 1.svg";
import Python from "../../Assets/Python-logo-notext 1.svg";
import Laravel from "../../Assets/laravel_icon_213860 1.svg";
import CodeIgniter from "../../Assets/Codeigniter_icon.svg";
import ReactJS from "../../Assets/React-icon.svg";
import Java from "../../Assets/icons8-java.svg";
import CSharp from "../../Assets/c--4.svg";

class MainContent extends Component {
  render() {
    return (
      <div class="expertise">
        <div class="front-end">
          <p>Front - End</p>
          <ul>
            <li>
              <img src={Kotlin}></img>Kotlin
            </li>
            <li>
              <img src={HTML} width="74" height="74"></img>HTML
            </li>
            <li>
              <img src={CSS} width="74" height="74"></img>CSS
            </li>
            <li>
              <img src={JavaScript} width="74" height="74"></img>Java Script
            </li>
            <li>
              <img src={ReactJS} width="74" height="74"></img>React.js
            </li>
          </ul>
        </div>
        <div class="back-end">
          <p>Back - End</p>
          <ul>
            <li>
              <img src={MySQL} width="74" height="74"></img>MySQL
            </li>
            <li>
              <img src={Python} width="74" height="74"></img>Python
            </li>
            <li>
              <img src={Laravel} width="74" height="74"></img>Laravel
            </li>
            <li>
              <img src={CodeIgniter} width="74" height="74"></img>Code Igniter
            </li>
          </ul>
        </div>
        <div class="others-expertise">
          <p>Others</p>
          <ul>
            <li>
              <img src={Java} width="74" height="74"></img>Java
            </li>
            <li>
              <img src={CSharp} width="74" height="74"></img>C#
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainContent;
