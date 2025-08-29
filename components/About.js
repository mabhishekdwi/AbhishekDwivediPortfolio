import { Row, Col, Figure, Button } from "react-bootstrap";
import { useState } from "react";

import classes from "../styles/About.module.css";
import ContactAddress from "./Contact/ContactAddress";
import OffCanvas from "./UI/OffCanvas/OffCanvas";

const About = ({ forwardedRef }) => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      ref={forwardedRef}
      id="about_section"
      className={`${classes["about-section-wrapper"]} p-sm-5 p-xs-2`}
    >
      <Row className="pl-sm-5 pr-sm-5 m-0">
        <Col lg={3}>
          <Figure>
            <Figure.Image
              width={180}
              height={180}
              alt="Abhishek"
              src="assets/images/me.jpeg"
              className="rounded-circle"
            />
          </Figure>
        </Col>
        <Col lg={9}>
          <h4>Professional Summery</h4>
          <Row className="mb-3">
            <Col>
              <p>
                  Team Leadership – Led Performance, Manual, Automation, UAT, and AI-driven QA teams; 
                  conducted daily stand-ups, resolved blockers, and mentored members.
                </p>
                <p>
                  Task Prioritization – Planned tasks and made quick, business-aligned decisions.
                </p>
                <p>
                  Stakeholder Coordination – Translated business needs into clear QA actions.
                </p>
                <p>
                  Team Development – Drove 1:1s, performance reviews, and skill growth.
                </p>
                <p>
                  Resource Planning – Forecasted needs, hired, and onboarded QAs.
                </p>
                <p>
                  Agile Practices – Active in sprint planning, grooming, and estimation.
                </p>
                <p>
                  Automation & AI – Hands-on with Selenium, TestNG, Maven, Cucumber BDD, REST API 
                  automation, and AI-powered test agents using Appium, OCR, DOM parsing, and Google 
                  Gemini for intelligent element recognition.
                </p>
                <p>
                  QA Ownership – Managed test case creation, regression, and defect tracking in JIRA.
                </p>
                <p>
                  Quality Advocacy – Represented QA in design discussions, ensuring early quality 
                  integration.
                </p>
                <p>
                  Risk Management – Identified and mitigated release risks.
                </p>

            </Col>
          </Row>
          <h4>Contact Details</h4>
          <Row>
            <Col lg={6}>
              <ContactAddress />
            </Col>
            <Col lg={6}>
              <div className="mb-4">
                {/* <a
                  className="btn btn-secondary rounded-0 btn-lg col-sm-8 mt-xs-2"
                  href="assets/docs/Abhishek Dwivedi_QA Updated_CV.pdf"
                  download
                >
                  <i className="bi bi-download mr-2"></i>Download Resume
                </a> */}
                <Button
                  variant="primary"
                  className="btn-lg col-sm-8 mt-3"
                  onClick={() => setShowResume(true)}
                >
                  <i className="bi bi-eye mr-2"></i>Preview Resume
                </Button>
              </div>
              {showResume && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <div className="modal-dialog modal-lg" style={{ maxWidth: '90%', margin: '30px auto' }}>
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Resume Preview</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowResume(false)}
                        ></button>
                      </div>
                      <div className="modal-body p-0">
                        <iframe
                          src="assets/docs/Abhishek Dwivedi_QA Updated_CV.pdf"
                          style={{ width: '100%', height: '80vh', border: 'none' }}
                          title="Resume Preview"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default About;
