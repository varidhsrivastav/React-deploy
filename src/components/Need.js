import React from "react";
import './need.css'
const Need = () => {
  return (
    <>
        <section className="needHelp ">
        <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5D05A4" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,138.7C640,160,800,192,960,181.3C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>

        
          <div className="container ">
            <div className="contaner">
              <div className="row ">
                <div className="col-lg-6">
                  <div className="title">
                    <h2>Need Help</h2>
                  </div>
                  <div className="need-para">
                    <p>We contact through calls, messages, social networks, emails, etc. We promise to solve your query in less than an hour or two.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="button">
                    <button className="needbutton">Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Need