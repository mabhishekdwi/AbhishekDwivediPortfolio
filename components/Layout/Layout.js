import dynamic from "next/dynamic";

import Header from "./Header";
import Footer from "./Footer";
import Home from "../Home";
import About from "../About";
import Resume from "../Resume";
import Skills from "../Skills";
import Contact from "../Contact/Contact";
import { useCallback, useEffect, useRef, useState } from "react";

const MouseParticles = dynamic(
  () => {
    return import("react-mouse-particles");
  },
  { ssr: false }
);

const Layout = () => {
  const [navLinks, setNavLinks] = useState([]);
  const homeRef = useRef();
  const homeTextRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  const footerRef = useRef();

  const createNavLinks = useCallback(() => {
    return [
      {
        name: "home",
        offsetMin: homeRef.current.offsetTop,
        offsetMax: aboutRef.current.offsetTop - 100,
        offsetHomeTextMin: homeTextRef.current.offsetTop - 100,
      },
      {
        name: "about",
        offsetMin: aboutRef.current.offsetTop - 100,
        offsetMax: resumeRef.current.offsetTop - 100,
      },
      {
        name: "resume",
        offsetMin: resumeRef.current.offsetTop - 100,
        offsetMax: skillsRef.current.offsetTop - 100,
      },
      {
        name: "skills",
        offsetMin: skillsRef.current.offsetTop - 100,
        offsetMax: contactRef.current.offsetTop - 100,
      },
      {
        name: "contact",
        offsetMin: contactRef.current.offsetTop - 100,
        offsetMax: footerRef.current.offsetTop - 100,
      },
    ];
  }, [homeRef, homeTextRef, aboutRef, resumeRef, skillsRef, contactRef]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNavLinksOnResize);
      setNavLinks(createNavLinks());
    }
  }, [createNavLinks]);

  const setNavLinksOnResize = () => setNavLinks(createNavLinks());

  const handleScroll = () => console.log("Scrolling Main Dvi");

  return (
    <>
      <div className="main" onScroll={handleScroll}>
        <Header navLinks={navLinks} />
        <main>
          <Home forwardedRef={homeRef} forwardedHomeTextRef={homeTextRef} />
          <About forwardedRef={aboutRef} />
          <Resume forwardedRef={resumeRef} />
          <Skills forwardedRef={skillsRef} />
          <Contact forwardedRef={contactRef} />
        </main>
        <Footer forwardedRef={footerRef} />
      </div>
      <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={6}
      />
    </>
  );
};

export default Layout;
