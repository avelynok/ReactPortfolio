import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Personal Skills</h3>
                <p className="info">
                    <ul>
                        <li>Attention to detail</li>
                        <li>Team Player</li>
                        <li>Problem solving </li>
                    </ul>
                    <ul>
                        <li>Planning strategically</li>
                        <li>Able to identify critical issues</li>
                        <li>Tactful and articulate</li>
                    </ul>
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Personal Qualities</h3>
                <p className="info">
                    <ul>
                        <li>Highly motivated and organized.</li>
                        <li>Have good technical and analytic skills. </li>
                        <li>Having a flexible approach and a Can Do attitude.</li>
                        <li>Experience of training and mentoring new software engineering students</li>
                    </ul>
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Technologies</h3>
                <p className="info">
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3/SASS</li>
                        <li>JavaScript</li>
                        <li>React/Redux</li>
                    </ul>
                    <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                    <ul>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>Rest API</li>
                        <li>Git/GitFlow</li>
                    </ul>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Semantic UI,</li>
                        <li>Material UI</li>
                        <li>Bash/Shell</li>
                    </ul>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
      </section>
      </React.Fragment>
    );
  }
}