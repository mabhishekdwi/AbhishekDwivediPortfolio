import { Row, Col, Card, ListGroup } from "react-bootstrap";

import AppProgressBar from "./UI/AppProgressBar";
import classes from "../styles/Skills.module.css";

const Skills = ({ forwardedRef }) => {
  const skills = [
    { id: "1", label: "Manual Testing", variant: "success", now: 95 },
    { id: "2", label: "Automation Testing", variant: "info", now: 85 },
    { id: "3", label: "Selenium", variant: "success", now: 90 },
    { id: "4", label: "TestNG", variant: "warning", now: 85 },
    { id: "5", label: "API Testing", variant: "warning", now: 80 },
    { id: "6", label: "Java", variant: "success", now: 75 },
    { id: "7", label: "Mobile Testing", variant: "success", now: 80 },
    { id: "8", label: "Test Planning & Strategy", variant: "success", now: 90 },
    { id: "9", label: "Agile/Scrum", variant: "success", now: 85 },
  ];

  const other_tools = [
    {
      id: "3",
      label: "Automation Framework",
      list: [
        { name: "Keyword Driven", iconname: "vscode.png" },
        { name: "Data Driven (POM)", iconname: "vscode.png" },
        { name: "Robot Framework (Python)", iconname: "vscode.png" },
        { name: "Hybrid", iconname: "vscode.png" },
        { name: "Sprint Boot", iconname: "vscode.png" },
      ],
    },{
      id: "7",
      label: "Languages",
      list: [
        { name: "Core Java", iconname: "vscode.png" },
        { name: "HTML and CSS", iconname: "vscode.png" },
        { name: "JavaScript (Basic)", iconname: "vscode.png" },
        { name: "React js and Node js", iconname: "vscode.png" },
        { name: "Python", iconname: "vscode.png" },
        { name: "Kotlin", iconname: "vscode.png" },
      ],
    },
   
    {
      id: "2",
      label: "Test Management Tools",
      list: [
        { name: "JIRA", iconname: "jira.png" },
        { name: "Unfuddle", iconname: "vscode.png" },
        { name: "Bugzilla", iconname: "vscode.png" },
        { name: "Test Rail", iconname: "vscode.png" },
        { name: "Test Link / XRay", iconname: "vscode.png" },
      ],
    },
    
    {
      id: "6",
      label: "Databases",
      list: [
        { name: "MySQL", iconname: "vscode.png" },
        { name: "MongoDB", iconname: "vscode.png" },
        { name: "SQL Server", iconname: "vscode.png" },
        { name: "Oracle", iconname: "vscode.png" },
        { name: "DB2", iconname: "vscode.png" },
        { name: "MS Access", iconname: "vscode.png" },
      ],
    }, {
      id: "7",
      label: "Languages",
      list: [
        { name: "Core Java", iconname: "vscode.png" },
        { name: "HTML and CSS", iconname: "vscode.png" },
        { name: "JavaScript (Basic)", iconname: "vscode.png" },
        { name: "React js and Node js", iconname: "vscode.png" },
        { name: "Python", iconname: "vscode.png" },
        { name: "Kotlin", iconname: "vscode.png" },
      ],
    },{
      id: "8",
      label: "Other Tools",
      list: [
        { name: "Docker", iconname: "vscode.png" },
        { name: "Kubernetes", iconname: "vscode.png" },
        { name: "TestNG", iconname: "vscode.png" },
        { name: "POSTMAN", iconname: "vscode.png" },
        { name: "RestAPI", iconname: "vscode.png" },
        { name: "Rest Assured", iconname: "vscode.png" },
        { name: "STLC", iconname: "vscode.png" },
        { name: "SDLC", iconname: "vscode.png" },
        { name: "UNIX", iconname: "vscode.png" },
        
      ],
    },
    {
      id: "4",
      label: "Build Management/Version Control",
      list: [
        { name: "Maven", iconname: "vscode.png" },
        { name: "Ant", iconname: "vscode.png" },
        { name: "GIT", iconname: "git.png" },
        { name: "SVN", iconname: "svn.png" },
        { name: "Bit Bucket", iconname: "vscode.png" },
        { name: "Jenkins-CI/CD", iconname: "vscode.png" }
      ],
    },
   
    {
      id: "9",
      label: "Domains",
      list: [
        { name: "US Healthcare", iconname: "vscode.png" },
        { name: "Fintech", iconname: "vscode.png" },
        { name: "Ecommerce", iconname: "vscode.png" },
        { name: "BFSI", iconname: "vscode.png" },
        { name: "Internet", iconname: "vscode.png" },
        { name: "Insurance", iconname: "vscode.png" },
        { name: "Education", iconname: "vscode.png" },
        { name: "Transport", iconname: "vscode.png" },
        { name: "Smart Card", iconname: "vscode.png" },
      ],
    },
  ];
  return (
    <section ref={forwardedRef} id="skills_section" className="p-0">
      <div className={`${classes["skills-section-wrapper"]} p-sm-5 p-xs-2`}>
        <Row className="pl-sm-5 pr-sm-5 m-0">
          <Col lg={3}>
            <h4 className="mb-xs-2">
              <span className="border-bottom border-primary">Skills</span>
            </h4>
          </Col>
          <Col lg={9}>
            {skills.map((skill) => (
              <AppProgressBar
                key={skill.id}
                label={skill.label}
                variant={skill.variant}
                now={skill.now}
              />
            ))}
          </Col>
        </Row>
      </div>
      <div className={`${classes["other-tools-wrapper"]} p-sm-5 p-xs-2`}>
        <Row className="m-0">
          {other_tools.map((tool) => (
            <Col lg={3} key={tool.id}>
              <Card className="mb-3">
                <Card.Header className={classes["card-heading"]}>
                  {tool.label}
                </Card.Header>
                <ListGroup variant="flush">
                  {tool.list.map((item) => (
                    <ListGroup.Item key={item.name.split(" ").join("_")}>
                      <div className="d-flex">
                        <div>{item.name}</div>
                        <div className="ml-auto">
                          <img
                            width="30"
                            height="30"
                            className="img"
                            src={`assets/images/${item.iconname}`}
                            alt={item.name}
                          />
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
