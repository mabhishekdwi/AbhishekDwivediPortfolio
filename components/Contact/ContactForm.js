import { useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import AppToast from "../UI/Toast/AppToast";
import classes from "../../styles/Contact.module.css";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isError, setIsError] = useState({ error: false, errMessage: "" });
  const nameInputVal = useRef("");
  const emailInputVal = useRef("");
  const subjectInputVal = useRef("");
  const messageInputVal = useRef("");

  const onInputChangeHandler = () => {
    setIsFormValid(false);
    const nameIsValid = nameInputVal.current.value.trim().length !== 0,
      emailIsValid = emailInputVal.current.value.trim().length !== 0,
      subjectIsValid = subjectInputVal.current.value.trim().length !== 0,
      messageIsValid = messageInputVal.current.value.trim().length !== 0;
    if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
      setIsFormValid(true);
    }
  };

  const contactMeHandler = async (event) => {
    event.preventDefault();
    setShowToast(true);
    setIsSending(true);
    const contactData = {
      nameInputVal: nameInputVal.current.value,
      emailInputVal: emailInputVal.current.value,
      subjectInputVal: subjectInputVal.current.value,
      messageInputVal: messageInputVal.current.value,
    };

    const responseData = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify(contactData),
    });

    const response = await responseData.json();
    if (response) {
      if (response.error) {
        setIsError({ error: true, errMessage: response.error });
      } else {
        nameInputVal.current.value = "";
        emailInputVal.current.value = "";
        subjectInputVal.current.value = "";
        messageInputVal.current.value = "";
      }
      setIsFormValid(false);
    }
    setIsSending(false);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  let toastClass = "bg-warning";
  let message = "Sending Email...";
  if (!isSending) {
    if (isError.error) {
      message = isError.errMessage;
      toastClass = "bg-danger";
    } else {
      message = "Mail sent successfully";
      toastClass = "bg-primary";
    }
  }

  return (
    <>
      <Form onSubmit={contactMeHandler}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="3">
            Name<span className="text-primary">*</span>
          </Form.Label>
          <Col sm="8">
            <Form.Control
              className={classes.input}
              type="text"
              size="lg rounded-0"
              ref={nameInputVal}
              onChange={onInputChangeHandler}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Email<span className="text-primary">*</span>
          </Form.Label>
          <Col sm="8">
            <Form.Control
              className={classes.input}
              type="email"
              size="lg rounded-0"
              ref={emailInputVal}
              onChange={onInputChangeHandler}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Subject
          </Form.Label>
          <Col sm="8">
            <Form.Control
              className={classes.input}
              type="text"
              size="lg rounded-0"
              ref={subjectInputVal}
              onChange={onInputChangeHandler}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Message<span className="text-primary">*</span>
          </Form.Label>
          <Col sm="8">
            <Form.Control
              className={classes.input}
              as="textarea"
              size="lg rounded-0"
              style={{ height: "250px", minheight: "100px" }}
              ref={messageInputVal}
              onChange={onInputChangeHandler}
              required
            />
          </Col>
        </Form.Group>
        <Row>
          <Col className="ml-2 mt-3">
            <Button
              className={`${classes.button} offset-sm-3 rounded-0`}
              variant="secondary"
              type="submit"
              disabled={!isFormValid}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <AppToast show={showToast} message={message} toastClass={toastClass} />
    </>
  );
};

export default ContactForm;
