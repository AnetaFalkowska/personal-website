import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className=" top-0 z-50 flex justify-between font-semibold px-[20%] pt-8 pb-10 text-secondary-button-text bg-gradient-to-r from-[#8B2750] via-[#902D5D] to-[#8B2750]">
      <NavLink to="/" className="hover:font-black">
        Home
      </NavLink>
      <ul className="flex gap-20">
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
        <div className="w-9">
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
  );
}
