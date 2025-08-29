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
      <Row className="pl-sm-5 pr-sm-5 m-0 mb-5">
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
    <p><strong>AI Projects – Money Control (as QA Lead)</strong></p>
    <ul>
      <li>AI Live Blog Testing – Designed an AI-powered system to validate real-time blog content accuracy, formatting, and publishing workflow.</li>
      <li>AI Chatbot for Customer Complaints – Built and tested an AI-driven chatbot to handle, route, and resolve user complaints, improving response times.</li>
      <li>RAG for Automation Framework – Integrated a Retrieval-Augmented Generation (RAG) model to enhance test data retrieval and context-aware automation.</li>
      <li>No-Code / Low-Code Automation – Developed a framework enabling testers to create automation flows without coding, using visual UI and AI assistance.</li>
      <li>LLM for Test Case Generation – Leveraged large language models to auto-generate test cases from requirements, reducing manual scripting effort.</li>
    </ul>
    <p>
      <em>Role:</em> Led the AI QA initiatives by defining strategy, guiding architecture, assigning tasks, mentoring the team, reviewing deliverables, and ensuring successful integration into existing QA processes.
    </p>

    <p><strong>FinTech – Beyond FinTech Projects:</strong></p>
    <p><em>Responsibilities</em></p>
    <ul>
      <li>Lead a cross-functional 14 QA team of Manual QAs and SDETs, managing both functional and non-functional testing efforts.</li>
      <li>Develop and maintain robust API, Mobile app, and UI automation frameworks using Java, Selenium, Appium, XCUITest, TestNG, Rest Assured, and Maven.</li>
      <li>Define and execute comprehensive test strategies, oversee test execution, and analyze results to ensure high-quality releases.</li>
      <li>Mentor and coach team members through regular 1:1s, skill assessments, and training to enhance automation and domain expertise.</li>
      <li>Monitor team performance using key metrics, provide constructive feedback, resolve conflicts, and keep the team motivated.</li>
      <li>Strategically allocate resources and tasks to balance manual and automation workloads while aligning with project priorities.</li>
    </ul>

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
