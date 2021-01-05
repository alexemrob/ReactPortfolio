import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from "./ALIresume.pdf"

const AboutMe = () => {
    return (

        <div class="container">
                <div class="title d-flex justify-content-center">
      <h1>Alexandria Robertson</h1>
    </div>
        <div class="row">
          <div class="col-md-20">
            <div class="row d-flex justify-content-center about-body">
              <div class="col-md-3">
                <img src="https://avatars2.githubusercontent.com/u/67127042?s=460&u=7040d363aee07c74cd608749c83a20964c7009d1&v=4" alt="AboutMePicture" width="100%" height="auto%"/>
              </div>
              <div class="col-md-6">
                <p>
                  AlexEmRob@gmail.com<br />
                  (810)399-3812<br />
                  <a class="linkColor" href="https://github.com/alexemrob">GitHub profile</a><br />
                  <a class="linkColor" href="https://www.linkedin.com/in/alexandria-robertson-81ba271a9/">LinkedIn
                    profile</a><br />
                  <a class="linkColor" href={Pdf}>Resume</a><br />
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