import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
  const location = useLocation();

  return (
    // <div className="bg-gradient-to-r from-[#9b2a56] via-[#9e2e60] to-[#9b2a56]">
    <div className="bg-gradient-to-r from-[#8B2750] via-[#902D5D] to-[#8B2750]">
      <Container>
        <nav className="flex justify-between gap-8 font-semibold py-8 text-secondary-button-text">
          <NavLink to="/" className="hover:font-black">
            Home
          </NavLink>
          <ul className="flex gap-8 lg:gap-16">
            <div className="w-13">
              <li>
                <HashLink
                  className={
                    `${location.pathname}${location.hash}` === "/#projects"
                      ? "underline decoration-2 font-black"
                      : "hover:font-black"
                  }
                  to="/#projects"
                >
                  My Projects
                </HashLink>
              </li>
            </div>
            <div className="w-13">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "underline decoration-2 font-black"
                      : "hover:font-black"
                  }
                  to="/resume"
                >
                  Resume
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
