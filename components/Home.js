import { Link } from "react-scroll";
import dynamic from "next/dynamic";

import classes from "../styles/Home.module.css";

const ParticlesBg = dynamic(
  () => {
    return import("particles-bg");
  },
  { ssr: false }
);

const Home = ({ forwardedRef, forwardedHomeTextRef }) => {
  return (
    <section
      ref={forwardedRef}
      id="home_section"
      className="justify-content-center align-items-center d-flex"
    >
      <ParticlesBg type="circle" bg={true} />
      <div className="text-center h-90" ref={forwardedHomeTextRef}>
        <h1>Abhishek Dwivedi</h1>
        <h5>
          I am a Senior Software Engineer specializing in Quality Assurance and Testing. <br />
          Passionate about ensuring software quality through comprehensive testing strategies and automation.
        </h5>
        <a href="https://www.linkedin.com/in/theabhishekdwivedi/" target="_blank" className="btn btn-lg btn-primary rounded-0 mt-3">
          <i className="bi bi-linkedin mr-2"></i>LinkedIn
        </a>
        <a href="https://github.com/mabhishekdwi/" target="_blank" type="button" className="btn btn-lg btn-primary rounded-0 mt-3">
          <i className="bi bi-github mr-2"></i>GitHub
        </a>
        <Link
          to="about_section"
          spy={true}
          smooth={true}
          duration={1000}
          delay={500}
          offset={-50}
          className={`${classes["down-arrow-link"]} border rounded-circle`}
        >
          <i className="bi bi-chevron-double-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
