import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile3.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am a professional software engineer based in Pittsburgh PA, capable of leveraging full-stack knowledge to build interactive and user-centered website 
                designs to scale. Fast learner, excellent at multitasking and working under pressure. 
                <br />
                <br />
                I am actively looking for a developer position with a great, fast-paced and ambitious company that can provide me with challenging, 
                interesting work that I can learn from and contribute to. I am open and always willing to learn new technologies.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Avelyno Koumaka</span><br />
                  <span>Pittsburgh, PA 15301 US</span><br />
                  <span>
                    <a href="tel:7249783199">(724) 978-3199</a>
                  </span><br/>
                  <span>
                    <a href="mailto:avelynokoumaka@gmail.com">avelynokoumaka@gmail.com</a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://bit.ly/KoumakaAvelynoResume" target="blank" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}