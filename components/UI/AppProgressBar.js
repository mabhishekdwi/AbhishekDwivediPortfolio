import { ProgressBar } from "react-bootstrap";

const AppProgressBar = ({ label, variant, now }) => {
  return (
    <>
      <h5>{label}</h5>
      <ProgressBar className="mb-3 col-lg-8 p-0" variant={variant} now={now} />
    </>
  );
};

export default AppProgressBar;
