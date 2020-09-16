import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">
            Designing programs that are truly helpful to people is my ultimate goal on every project.
            I am here to help and answer any question you might have. I look forward to hearing from you
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form method="post" id="contactForm" name="contactForm">
            <input type="hidden" name="form-name" value="contactForm" />
				      <fieldset>
                  <div>
					          <label for="contactName">Name <span class="required">*</span></label>
					          <input type="text" size="35" id="contactName" name="contactName" placeholder="Enter your name"/>
                  </div>
                  <div>
					          <label for="contactEmail">Email <span class="required">*</span></label>
					           <input type="text" size="35" id="contactEmail" name="contactEmail" placeholder="Enter your email"/>
                  </div>
                  <div>
                     <label for="contactMessage">Message <span class="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" placeholder="How can I help...?"></textarea>
                  </div>
                  <div>
                    <button type="submit" >Submit</button>
                     
                  </div>
				</fieldset>
			</form>{/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Avelyno Koumaka<br />
                Pittsburgh, PA 15301 US <br />
                <span>
                    <a href="tel:7249783199">(724) 978-3199</a>
                  </span><br/>
                 <span>
                    <a href="mailto:avelynokoumaka@gmail.com">avelynokoumaka@gmail.com</a>
                </span>
              </p>
            </div>
            <div className="widget widget_tweets">
              <h4 className="widget-title">Favorite Quotes</h4>
              <ul id="twitter">
                <li>
                  <span>
                  “Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me.”
                  </span>
                  <b><h4 className="widget-title">-Steve Jobs</h4></b>
                </li>
                <li>
                  <span>
                  “Genius is 1% inspiration, 99% perspiration.”
                  </span>
                  <b><h4 className="widget-title">-Thomas Edison</h4></b>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section> 
      </React.Fragment>
    );
  }
}