import React, { Component } from "react";
import Kotlin from "../../Assets/Kotlin-Vector.svg";
import HTML from "../../Assets/HTML5_Badge.svg";
import CSS from "../../Assets/CSS3_logo.svg";
import JavaScript from "../../Assets/javascript-1.svg";
import MySQL from "../../Assets/mysql-logo-svgrepo-com 1.svg";
import Python from "../../Assets/Python-logo-notext 1.svg";
import Laravel from "../../Assets/laravel_icon_213860 1.svg";
import CodeIgniter from "../../Assets/Codeigniter_icon.svg";

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
          </ul>
        </div>
        <div class="back-end">
          <p>Back - End</p>
          <ul>
            <li>
              <img src={MySQL}></img>MySQL
            </li>
            <li>
              <img src={Python}></img>Python
            </li>
            <li>
              <img src={Laravel}></img>Laravel
            </li>
            <li>
              <img src={CodeIgniter}></img>Code Igniter
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainContent;
