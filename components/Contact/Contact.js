import { Row, Col } from "react-bootstrap";

import classes from "../../styles/Contact.module.css";
import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";

const Contact = ({ forwardedRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="contact_section"
      className={`${classes["contact-section-wrapper"]} p-sm-5 p-xs-2`}
    >
      <Row className="m-0 mb-5 pb-5">
        <Col lg={2}>
          <i className="bi bi-envelope display-1 lh-0"></i>
        </Col>
        <Col lg={9} className="mt-xs-2">
          <h5>
            If you're looking for a skilled QA Engineer to enhance your software quality and testing processes, 
            you can reach out to me on any platform given here or simply fill this form and I'll get back to you.
          </h5>
        </Col>
      </Row>
      <Row className="m-0 mb-5 pb-5 p-xs-0">
        <Col lg={8}>
          <ContactForm />
        </Col>
        <Col lg={4} className="mt-xs-2">
          <h4>Contact Details</h4>
          <div className="text-muted">
            <ContactAddress />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
