const AppButton = ({ type, clickHandler, label, iconname, btnClasses }) => {
  return (
    <button
      type={type || "button"}
      onClick={clickHandler}
      className={`btn rounded-0 ${btnClasses.join(" ")}`}
    >
      {iconname && <i className={`bi mr-2 bi-${iconname}`}></i>}
      {label}
    </button>
  );
};

export default AppButton;
