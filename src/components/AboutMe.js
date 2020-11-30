import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutMe = () => {
    return (
        <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="page-header">
              <h1>About Me</h1>
            </div>
            <div class="row">
              <div class="col-md-3">
                <img src="./assets/headshot.jpg" alt="AboutMePicture" class="img-thumbnail"/>
              </div>
              <div class="col-md-9">
                <p>
                  Alexandria Robertson
                  AlexEmRob@gmail.com
                  (810)399-3812
                  <a class="linkColor" href="https://github.com/alexemrob">GitHub profile</a>
                  <a class="linkColor" href="https://www.linkedin.com/in/alexandria-robertson-81ba271a9/">LinkedIn
                    profile</a>
                  <a class="linkColor" href="./assets/ResumeOfficial.pdf">Resume</a>
                  My name is Alexandria. I am a 27 year old hairstylist living in Houston, Texas. Coding and computer
                  programming has always peaked my interest and now I am ready to dive deeper. By the end of this course
                  I hope to gain entrance in a career field that will utalize my new skills. Outside of work I enjoy
                  cooking, reading, running, and playing with my dog, Harlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}

export default AboutMe;