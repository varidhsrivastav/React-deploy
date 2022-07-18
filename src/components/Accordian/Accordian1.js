import React from "react";
import { useState } from "react";
import { questions } from "./api";
import { questions2 } from "./api2";
import "./acordian.css";
import "../faq.css";
import Myaccordian from "./Myaccordian";
const Accordian = () => {
  const [data] = useState(questions);
  const [data2] = useState(questions2);
  return (
    <>
      <section className="main-div faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 faq-title">
              <h2>F.A.Q</h2>
            </div>
            <div className="col-lg-4 by-parent ">
              <h2>Asked by parents/students</h2>
              <div className="ques-ans">
                {data.map((curElem) => {
                  const { id } = curElem;
                  return <Myaccordian key={id} {...curElem} />;
                })}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="by-student">
                <h2>Asked by Tutors </h2>
                <div className="ques-ans">
                  {data2.map((curElem) => {
                    const { id1 } = curElem;
                    return <Myaccordian key={id1} {...curElem} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Accordian;

// raf
