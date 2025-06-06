import { useState } from "react";
import AppButton from "../Button/AppButton";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./OffCanvas.module.css";

const OffCanvas = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState.showSideDrawer);
  };

  let attachedClasses = [classes.__OffCanvas, classes.Close];
  if (showSideDrawer) {
    attachedClasses = [classes.__OffCanvas, classes.Open];
  }
  return (
    <>
      <AppButton
        btnClasses={["btn-primary btn-lg col-sm-8"]}
        clickHandler={sideDrawerToggleHandler}
        label="Preview Resume"
        iconname="eye"
      />
      <Backdrop show={showSideDrawer} click={sideDrawerClosedHandler} />
      <div className={attachedClasses.join(" ")}>{children}</div>
    </>
  );
};

export default OffCanvas;
