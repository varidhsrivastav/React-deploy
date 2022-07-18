import React from "react";
import { Accordion } from "@mantine/core";
import "./faq.css";

const Faq = () => {
  return (
    <>
      <section className="faq">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 faq-title">
                <h2>F.A.Q</h2>
              </div>
              <div className="col-lg-4 col-md-4 ">
                <div className="by-parent">
                  <h2>Asked by parents/students</h2>
                </div>
                <div className="ques-accordian">
                  <Accordion>
                    <Accordion.Item
                      label="Que 1) How do I use this website to find a Home Tutor?"
                      className="ques"
                    >
                      Ans) There is a form available on our website, simply fill
                      in the details asked and submit the form. Our team will
                      contact you quickly with the list of our top qualified
                      tutors based on your requirements.
                    </Accordion.Item>

                    <Accordion.Item
                      label="Que 2) What is the fees charged for the tuition classes?"
                      className="ques"
                    >
                      Ans) We charge reasonable fees keeping in mind our
                      customers financial status. The fees structure depends on
                      the class and the number of subjects being taught.
                    </Accordion.Item>

                    <Accordion.Item
                      label="Que 3) Where will the Home Tuition take place?"
                      className="ques"
                    >
                      Ans) The Home Tutoring Service takes place in the parents
                      home. Students can have the classes in their comfort
                      place.
                    </Accordion.Item>
                    <Accordion.Item
                      label="Que 4) Will I get any demo class before hiring a full time tuition service?"
                      className="ques"
                    >
                      Ans) Yes, once we find a perfect Home Tutor for you based
                      on your requirement, we arrange a free 3 days demo class
                      session by our home tutor at your preferred place. You can
                      finalise the tutor in you like the demo classes.
                    </Accordion.Item>
                    <Accordion.Item
                      label="Que 5) What if I do lot like the demo class?"
                      className="ques"
                    >
                      Ans) If the student or parents are not satisfied with the
                      demo class, we arrange another home tutor who can stand on
                      their expectations.
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="by-student">
                  <h2>Asked by Tutors</h2>
                </div>
                <div className="ques-accordian">
                  <Accordion>
                    <Accordion.Item
                      label="Que 1) How can we contact for the tuition?"
                      className="ques"
                    >
                      <p>
                        Ans) There are two simple ways of contacting us- 1. On
                        our website click registration2. Call or whatsapp us on
                        the contact no. given
                      </p>
                    </Accordion.Item>

                    <Accordion.Item
                      label="Que 2) What will be the approximate distance tutors will have to cover for the Home Tuitions?"
                      className="ques"
                    >
                      Ans) Our team provides home tuitions in the near by
                      locality of the tutors. Maximum distance could be 10-15 km
                      not more.
                    </Accordion.Item>

                    <Accordion.Item
                      label="Que 3) What are the eligibility criteria for the Home tutors?"
                      className="ques"
                    >
                      Ans) We look up for class 12th/graduation/post graduation
                      pass outs and students, with great academic excellence and
                      a passion for teaching.
                    </Accordion.Item>
                    <Accordion.Item
                      label="Que 4) What will be the monthly salary of a Home Tutor?"
                      className="ques"
                    >
                      Ans) The salary of the Home Tutors depend on some factors
                      like- qualification, class you are teaching, subjects you
                      are teaching and work experience.
                    </Accordion.Item>
                    <Accordion.Item
                      label="Que 5) Do the Personal Home Tutors need to submit any sort of documents?"
                      className="ques"
                    >
                      Ans) Yes, the tutors are requested to submit your
                      qualification/ experience certificates, id proof and local
                      address proof.
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
