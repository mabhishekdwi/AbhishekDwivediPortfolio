import { Row, Col } from "react-bootstrap";
import classes from "../styles/Resume.module.css";

const Resume = ({ forwardedRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="resume_section"
      className={`${classes["resume-section-wrapper"]} p-sm-5 p-xs-2`}
    >
      <Row className="pl-sm-5 pr-sm-5 m-0 mb-5 pb-5 border-bottom">
        <Col lg={3}>
          <h4 className="mb-xs-2">
            <span className="border-bottom border-primary">Education</span>
          </h4>
        </Col>
        <Col lg={9}>
          <h4>Bachelor of Technology (B.Tech)</h4>
          <p className="text-muted">
            <em>from UPTU</em> • 2006 - 2010
          </p>
          <p>
            Completed B.Tech from UPTU.
          </p>
        </Col>
      </Row>
      <Row className="pl-sm-5 pr-sm-5 m-0 mb-5 ">
        <Col lg={3}>
          <h4 className="mb-xs-2">
            <span className="border-bottom border-primary">
              Work Experience
            </span>
          </h4>
        </Col>
        <Col lg={9}>
          <h4>Senior Technical Lead - QA</h4>
          <p className="text-muted">
            <em>Current Role</em> • Apr 2022 – Present<br/>Money Control – Fintech
          </p>
          <p>
            Leading a cross-functional team of 14 QAs and SDETs across manual and automation streams. Spearheading functional and non-functional testing efforts, including mobile, web, and API layers. Architecting and maintaining robust automation frameworks using Java, Selenium, Appium, XCUITest, TestNG, Rest Assured, and Maven. Defining comprehensive test strategies, mentoring team members, and fostering a strong QA culture. Driving career growth through coaching, certifications, and skill-building while aligning QA processes with agile delivery cycles.
          </p>

          <h4>QA Manager</h4>
          <p className="text-muted">
            <em>Previous Role</em> • Nov 2021 – Apr 2022<br/>Times Internet – Banking
          </p>
          <p>
            Managed end-to-end QA delivery across multiple projects. Led a blended team of QAs and SDETs, architected BDD frameworks using Cucumber, and ensured scalable and reusable test automation. Handled test estimation, planning, and sprint alignment. Collaborated with stakeholders on test strategy, quality gates, and delivery risks. Mentored team members, conducted stand-ups, and ensured continuous improvement through early QA involvement in the SDLC.
          </p>

          <h4>Senior Lead QA</h4>
          <p className="text-muted">
            <em>Previous Role</em> • Jul 2019 – Nov 2021<br/>Info Edge – Internet
          </p>
          <p>
            Owned automation framework design and test library development using Selenium. Executed manual and automation test cases for frontend and backend systems. Collaborated with developers for debugging, test coverage, and quality improvements. Conducted regression, smoke, system, and integration testing. Involved in test data management and requirement analysis, enhancing testing efficiency through custom scripts and tools.
          </p>

          <h4>Module Lead - QA</h4>
          <p className="text-muted">
            <em>Previous Role</em> • Jun 2017 – Jul 2019<br/>Pyramid IT Consulting
          </p>
          <p>
            Led module-level QA activities, including planning, execution, and reporting. Focused on both manual and automation testing while mentoring junior QA members. Ensured timely delivery through efficient test cycle management.
          </p>

          <h4>Senior QA Analyst – US Healthcare</h4>
          <p className="text-muted">
            <em>Previous Role</em> • Aug 2014 – Jun 2017<br/>hCentive (Optum)
          </p>
          <p>
            Contributed to QA for healthcare products, focusing on policy, claims, and enrollment modules. Developed test cases based on business requirements, executed comprehensive regression cycles, and collaborated with developers for issue resolution.
          </p>

          <h4>Senior QA</h4>
          <p className="text-muted">
            <em>Previous Role</em> • Aug 2012 – Aug 2014<br/>NIC (National Informatics Center)
          </p>
          <p>
            Performed manual testing across e-Governance applications. Created test scenarios, executed test cases, and reported bugs with detailed documentation. Contributed to release quality for various government applications.
          </p>

          <h4>Software Engineer – QA</h4>
          <p className="text-muted">
            <em>Previous Role</em> • Oct 2010 – Aug 2012<br/>IDEMIA – Smart Card
          </p>
          <p>
            Executed test plans for smart card-based applications. Involved in testing middleware and hardware-software integration. Reported and tracked issues in coordination with cross-functional teams.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Resume;
