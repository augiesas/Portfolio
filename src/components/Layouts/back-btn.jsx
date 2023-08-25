import React, { Component } from "react";
import BtnBack from "../../Assets/Arrow - Back.svg";

class BackBtn extends Component {
  render() {
    return (
      <div class="back-btn">
        <object type="image/svg+xml" data={BtnBack}></object>
      </div>
    );
  }
}

export default BackBtn;
