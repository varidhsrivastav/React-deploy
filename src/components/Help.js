import React from "react";
import "./help.css";
// import wave from "../image/wave.svg";

const Help = () => {
  return (
    <>
      <section className="help  container-fluid">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
  <path fill="#5D05A4" fill-opacity="1" d="M0,256L80,224C160,192,320,128,480,112C640,96,800,128,960,154.7C1120,181,1280,203,1360,213.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 help-title">
                <div className="h1-help">
                  <h1 className="">Help & Support</h1>
                </div>
                <div className="p-help">
                  <p>
                    Rablo.in provides a team to our clients, who are active 24×7
                    to solve any of their queries. Our team works through every
                    possible mode to contact and help people.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 divide">
                <div className="help-ask">
                  <h2> Ask Your Enquiry Here</h2>
                </div>
                <div className="contact-form">
                  <form action="">
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="number"
                      className="form-control"
                      name="Number"
                      placeholder="Mobile Number"
                      required
                    />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="Email"
                      required
                    />
                    <textarea
                      name="Question"
                      className="form-control"
                      id="QUES"
                      cols="30"
                      rows="3"
                      placeholder="Question"
                    ></textarea>
                    <button className="submit-btn">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;

// -webkit-text-size-adjust: 100%;
// --wp--preset--font-size--normal: 16px;
// --wp--preset--font-size--huge: 42px;
// --page-title-display: block;
// --wp--preset--color--black: #000000;
// --wp--preset--color--cyan-bluish-gray: #abb8c3;
// --wp--preset--color--white: #ffffff;
// --wp--preset--color--pale-pink: #f78da7;
// --wp--preset--color--vivid-red: #cf2e2e;
// --wp--preset--color--luminous-vivid-orange: #ff6900;
// --wp--preset--color--luminous-vivid-amber: #fcb900;
// --wp--preset--color--light-green-cyan: #7bdcb5;
// --wp--preset--color--vivid-green-cyan: #00d084;
// --wp--preset--color--pale-cyan-blue: #8ed1fc;
// --wp--preset--color--vivid-cyan-blue: #0693e3;
// --wp--preset--color--vivid-purple: #9b51e0;
// --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
// --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
// --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
// --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
// --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
// --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
// --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
// --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
// --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
// --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
// --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
// --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
// --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
// --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
// --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
// --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
// --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
// --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
// --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
// --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
// --wp--preset--font-size--small: 13px;
// --wp--preset--font-size--medium: 20px;
// --wp--preset--font-size--large: 36px;
// --wp--preset--font-size--x-large: 42px;
// --e-global-color-primary: #6EC1E4;
// --e-global-color-secondary: #54595F;
// --e-global-color-text: #7A7A7A;
// --e-global-color-accent: #61CE70;
// --e-global-color-37c30b6f: #4054B2;
// --e-global-color-658cf471: #23A455;
// --e-global-color-2125c3a1: #000;
// --e-global-color-560dacca: #FFF;
// --e-global-color-1d59f57f: #7861C3;
// --e-global-color-56687dc3: #C5C2CF;
// --e-global-color-5117437d: #9D00FF;
// --e-global-color-6208d11: #FCE300;
// --e-global-color-1425c0d: #010244;
// --e-global-typography-primary-font-family: "Roboto";
// --e-global-typography-primary-font-weight: 600;
// --e-global-typography-secondary-font-family: "Roboto Slab";
// --e-global-typography-secondary-font-weight: 400;
// --e-global-typography-text-font-family: "Roboto";
// --e-global-typography-text-font-weight: 400;
// --e-global-typography-accent-font-family: "Roboto";
// --e-global-typography-accent-font-weight: 500;
// hyphens: manual;
// --e-column-margin-right: 0px;
// --e-column-margin-left: 0px;
// --flex-direction: initial;
// --flex-wrap: initial;
// --justify-content: initial;
// --align-items: initial;
// --align-content: initial;
// --gap: initial;
// --flex-basis: initial;
// --flex-grow: initial;
// --flex-shrink: initial;
// --order: initial;
// --align-self: initial;
// -webkit-box-direction: normal;
// --widgets-spacing: 20px;
// text-align: center;
// clear: both;
// box-sizing: border-box;
// padding: 0;
// margin: 0;
// line-height: 1;
// padding-top: 0;
// color: #ffffff;
// font-family: "Comfortaa", Sans-serif;
// font-size: 60px;
// font-weight: 500;
// text-transform: capitalize;
