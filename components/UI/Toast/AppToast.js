import CreatePortal from "../CreatePortal/CreatePortal";
import classes from "./AppToast.module.css";

const AppToast = ({ show, message, heading, toastClass }) => {
  return (
    show && (
      <CreatePortal selector="#toast-root">
        <div className={classes.toast}>
          {heading && (
            <div className={classes.header}>
              <strong className="me-auto">{heading}</strong>
            </div>
          )}
          {message && (
            <div className={`${classes.body} ${toastClass}`}>
              <i className="bi bi-envelope-fill mr-2"></i>
              {message}
            </div>
          )}
        </div>
      </CreatePortal>
    )
  );
};

export default AppToast;
