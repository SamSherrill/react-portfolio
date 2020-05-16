import React, { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <>
        <body className="container">
          <div className="jumbotron">
            <h1 className="display-4">About Me</h1>
            <hr className="my-4" />
            <img
              className="profile-pic"
              src="./images/sam-sherrill-profile-pic.jpg"
              alt="Sam Sherrill"
            />

            <p>
              As a professional, I feel like I've always been one of the lucky
              ones who enjoys getting up for work everyday. I've been blessed to
              have flexibility to choose where & what I work on. As technology
              continues to advance, I get more excited about what I do.
            </p>

            <p>
              Recently, I've chosen to move from the business development side
              of IT into being more directly involved with technology. I'm
              current enrolled in Georgia Tech's Software Development Boot Camp.
              Curriculum here:
              https://bootcamp.pe.gatech.edu/coding/curriculum/. I will graduate
              on May 18th, and will be ready to immediately jump into a Jr.
              Developer role.{" "}
            </p>

            <p>
              In my personal life, I'm a husband, and a father to 3 wonderful
              kids. We love Atlanta, but we also have roots across the west. We
              would consider jobs locally, on the Pacific Coast, or in the
              Mountain West.{" "}
            </p>

            <p>
              Email me at Samuel.Sherrill@gmail.com. You can also call or text
              me at (770) 877-0690.{" "}
            </p>

            <div className="flex-row">
              <br></br>
              <div className="link-buttons">
                <a
                  className="btn"
                  href="https://drive.google.com/open?id=1qKazRYsYfW8kRviCAv_47cIo1NyKwDyU"
                  target="_blank"
                >
                  Resume
                </a>
                <a
                  className="btn"
                  href="https://www.linkedin.com/in/SamuelSherrill/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="btn"
                  href="https://github.com/SamSherrill"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default AboutMe;
