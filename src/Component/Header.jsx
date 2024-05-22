import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const path = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar fluid rounded className="sticky top-0 z-20">
      <Navbar.Brand as={Link} to="/">
        <img
          src="/logo-main.svg"
          alt="Sartin Alloys"
          className={`w-[15rem] ease-in duration-700 ${
            scrollY > 10 ? "w-[9rem]" : ""
          }  h-auto ml-7`}
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === "/home"} as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/services"} as={"div"}>
          <Link to="/services">Services</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/team"} as={"div"}>
          <Link to="/team">Team</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link to="/contact">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
