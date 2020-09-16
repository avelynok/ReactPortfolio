import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt="" src="images/portfolio/maze.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Maze</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/portfolio/connect4.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Connect 4</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images/portfolio/TOH.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Tower Of Hanoi</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/portfolio/todoApp.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Todo App</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt="" src="images/portfolio/twitter.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Kwitter</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" title>
                      <img alt="" src="images/portfolio/instaClone.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>InstaClone</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-07" title>
                      <img alt="" src="images/portfolio/ghostpost.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Ghostpost</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-08" title>
                      <img alt="" src="images/portfolio/shoestore.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Shoe Store</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/maze.gif" alt="" />
              <div className="description-box">
                <h4>Maze</h4>
                <p>A JavaScript game that lets the player use their cursor keys to move through a maze one step at a time. The maze is a 2D array of cells which are either floors (passable) or walls (impassable).</p>
                <span className="categories"><i className="fa fa-tag" />HTML5, CSS, JavaScript</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/maze" target="_blank">Code</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/connect4.gif" alt="" />
              <div className="description-box">
                <h4>Connect 4</h4>
                <p>One player is assigned Red and the other player is assigned Yellow. Players alternate inserting their pieces into one of the columns of the grid. The first player to get four of their pieces in a row (horizontal, vertical, or diagonal), wins.</p>
                <span className="categories"><i className="fa fa-tag" />HTML5, CSS, JavaScript</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/connect-four" target="_blank">Code</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/TOH.gif" alt="" />
              <div className="description-box">
                <h4>Tower Of Hanoi</h4>
                <p>Object of the game is to move all the disks over to Tower 3 (with your mouse). But you cannot place a larger disk onto a smaller disk.</p>
                <span className="categories"><i className="fa fa-tag" />HTML5, CSS, JavaScript</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/tower-of-hanoi" target="_blank">Code</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/todoApp.gif" alt="" />
              <div className="description-box">
                <h4>Todo App</h4>
                <p>A React/Redux app that helps you keep track and organize daily tasks.</p>
                <span className="categories"><i className="fa fa-tag" />Photography</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/todo-app" target="_blank">Code</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/kwitter.gif" alt="" />
              <div className="description-box">
                <h4>Kwitter</h4>
                <p>A Twitter clone built with React an Redux.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/Kwitter" target="_blank">Code</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/instaClone.gif" alt="" />
              <div className="description-box">
                <h4>InstaClone</h4>
                <p>An Instagram clone built with python and django.</p>
                <span className="categories"><i className="fa fa-tag" />Photography</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/InstagramClone" target="_blank">Code</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/ghostpost.png" alt="" />
              <div className="description-box">
                <h4>Ghostpost</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/ghostpost_frontend" target="_blank">Frontend</a>
                <a href="https://github.com/avelynok/ghostpost_backend" target="_blank"> Backend</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/shoestore.png" alt="" />
              <div className="description-box">
                <h4>Shoe Store</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/avelynok/drf_shoestore_frontend" target="_blank">Frontend</a>
                <a href="https://github.com/avelynok/Django-ReST-Framework" target="_blank"> Backend</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
          </div> {/* row End */}
        </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}