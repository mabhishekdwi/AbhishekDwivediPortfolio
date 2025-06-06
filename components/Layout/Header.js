import { useCallback, useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = ({ navLinks }) => {
  const [activeNav, setActiveNav] = useState("home");
  const [navFixed, setNavFixed] = useState(true);

  const handleScroll = useCallback(
    (event) => {
      navLinks.map((navlink) => {
        if (navlink.name == "home" && navlink.offsetHomeTextMin) {
          if (
            window.scrollY > navlink.offsetHomeTextMin &&
            window.scrollY < navlink.offsetMax
          ) {
            setNavFixed(false);
          } else {
            setNavFixed(true);
          }
        }
        if (
          window.scrollY > navlink.offsetMin &&
          window.scrollY < navlink.offsetMax
        ) {
          setActiveNav(navlink.name);
        }
      });
    },
    [navLinks]
  );

  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    };
  }, [handleScroll]);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={activeNav !== "home" && "dark"}
        variant={activeNav !== "home" && "dark"}
        fixed={"top"}
        className={!navFixed && "invisible"}
      >
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {navLinks &&
              navLinks.map((navlink) => (
                <Nav.Link
                  key={navlink.name}
                  as={Link}
                  to={`${navlink.name.toLowerCase()}_section`}
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={500}
                  offset={-50}
                  className={
                    activeNav === navlink.name
                      ? "active text-capitalize navLink"
                      : "text-capitalize navLink"
                  }
                >
                  {navlink.name}
                </Nav.Link>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
