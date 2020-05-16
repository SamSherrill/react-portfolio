import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <body className="container">
        <div className="jumbotron">
          <h1 className="display-4">Contact</h1>
          <hr className="my-4" />
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button className="btn submit-btn">Submit</button>
          </form>
        </div>
        {/* Consider a address book favicon */}
      </body>
    );
  }
}

export default Contact;
