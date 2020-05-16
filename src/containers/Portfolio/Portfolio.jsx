import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <body className="container">
        <div className="jumbotron">
          <h1 className="display-4">Portfolio</h1>
          <hr className="my-4" />

          <div className="row">
            <div className="column">
              <div className="card">
                <img
                  src="./images/portfolio-images/password-generator.png"
                  className="card-img-top"
                  alt="password generator screenshot"
                />
                <div className="card-body text-center">
                  <p className="card-text"> Password Generator </p>
                  <a
                    className="github-link"
                    target="_blank"
                    href="https://github.com/SamSherrill/3rd-homework"
                  >
                    GitHub Repo{" "}
                  </a>
                  <a
                    className="deployed-app-link"
                    target="_blank"
                    href="https://samsherrill.github.io/3rd-homework/"
                  >
                    Deployed App{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img
                  src="./images/portfolio-images/coronavirus-tracker.png"
                  className="card-img-top"
                  alt="coronavirus tracker screenshot"
                />
                <div className="card-body text-center">
                  <p className="card-text"> Coronavirus Tracker </p>
                  <a
                    className="github-link"
                    target="_blank"
                    href="https://github.com/SamSherrill/covid-19-info-tracker"
                  >
                    GitHub Repo{" "}
                  </a>
                  <a
                    className="deployed-app-link"
                    target="_blank"
                    href="https://samsherrill.github.io/covid-19-info-tracker/"
                  >
                    Deployed App{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <img
                  src=".images/portfolio-images/eat-da-burger.jpg"
                  className="card-img-top"
                  alt="Eat-Da-Burger screenshot"
                />
                <div className="card-body text-center">
                  <p className="card-text"> Eat-Da-Burger </p>
                  <a
                    className="github-link"
                    target="_blank"
                    href="https://github.com/SamSherrill/13th-homework"
                  >
                    GitHub Repo{" "}
                  </a>
                  <a
                    className="deployed-app-link"
                    target="_blank"
                    href="https://evening-dawn-42448.herokuapp.com/burgers"
                  >
                    Deployed App{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Portfolio;
