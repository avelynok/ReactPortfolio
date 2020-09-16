import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
                <li><a href="https://www.linkedin.com/in/avelyno-koumaka/" target="blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://twitter.com/AvelynoK" target="blank"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://github.com/avelynok " target="blank"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2020 Avelyno Koumaka</li>
               
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}