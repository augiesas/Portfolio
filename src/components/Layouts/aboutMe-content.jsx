import React, { Component } from "react";

class MainContent extends Component {
  render() {
    return (
      <div class="aboutme-contents">
        <h3>Hi,</h3>
        <p>
          My name is Augie Salvatory Anggodo. Im born in Sidoarjo, 10 December
          2001. I am a graduate with a bachelor's degree in Informatics
          Engineering from the University of Surabaya. I focused on Data Science
          and Artificial Intelligence.
          <br />
          <br />
          In addition to my expertise in Data Science and Artificial
          Intelligence, I also honed my skills in website development. I have
          contributed to several projects, participating in design, front-end
          coding and back-end coding.
        </p>
        <div class="contacts">
          <p>Contact Me</p>
          <ul>
            <li>
              <a href="mailto: augie100801@gmail.com" target="_blank">
                <i class="bi bi-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/augiesalvatoryanggodo/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/augie_sa/" target="_blank">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <i class="bi bi-telephone"></i> +62 856 5610 5142
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainContent;
