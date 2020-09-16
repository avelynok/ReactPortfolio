import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#mobile-btn" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Skills</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Avelyno Koumaka.</h1>
              <h3>A Pittsburgh, PA based <a className="smoothscroll" href="#about"><span>Software Engineer</span></a>, with hands on experience in designing, coding, and testing complex systems.<a className="smoothscroll" href="#about"> Start scrolling </a> to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/avelyno-koumaka/" target="blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://twitter.com/AvelynoK" target="blank"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://github.com/avelynok " target="blank"><i className="fa fa-github" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header> {/* Header End */}
      </React.Fragment>
    );
  }
}
