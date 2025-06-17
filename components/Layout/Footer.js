import { Link } from "react-scroll";
import classes from "../../styles/Footer.module.css";

const Footer = ({ forwardedRef }) => {
  return (
    <footer ref={forwardedRef} className={`${classes.footer} `}>
      <Link
        to="home_section"
        spy={true}
        smooth={true}
        duration={1000}
        delay={500}
        className={`${classes["up-arrow-link"]} border rounded-circle`}
      >
        <i className="bi bi-chevron-double-up"></i>
      </Link>
      <div className="justify-content-center d-flex pt-5 pb-2">
        <h4>
          <a href="https://www.facebook.com/" target="_blank">
            <span className="mr-4">
              <i className="bi bi-facebook"></i>
            </span>
          </a>
        </h4>
        <h4>
          <a
            href="https://www.linkedin.com/in/theabhishekdwivedi/"
            target="_blank"
          >
            <span className="mr-4">
              <i className="bi bi-linkedin"></i>
            </span>
          </a>
        </h4>
        <h4>
          <a href="https://github.com/mabhishekdwi" target="_blank">
            <span className="mr-4">
              <i className="bi bi-github"></i>
            </span>
          </a>
        </h4>
        <h4>
          <a href="https://wa.me/918375957434" target="_blank">
            <span className="mr-4">
              <i className="bi bi-whatsapp"></i>
            </span>
          </a>
        </h4>
        <h4>
          <a href="https://t.me/" target="_blank">
            <span className="mr-4">
              <i className="bi bi-telegram"></i>
            </span>
          </a>
        </h4>
      </div>
      <div className="text-center text-muted pb-5">
        &copy; Copyright {new Date().getFullYear()} Abhishek Dwivedi
      </div>
    </footer>
  );
};

export default Footer;
