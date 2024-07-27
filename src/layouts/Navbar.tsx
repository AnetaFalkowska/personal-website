import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 flex gap-28 justify-between bg-secondary-background font-semibold px-12 pt-8 pb-10">
      <NavLink to="/" className="hover:font-black">aneta__falkowska</NavLink>
      <ul className="flex gap-20">
        <div className="w-9"><li>
          <HashLink
            className={
              `${location.pathname}${location.hash}` === "/#projects"
                ? "underline decoration-2 font-black"
                : "hover:font-black"
            }
            to="/#projects"
          >
            projects
          </HashLink>
        </li></div>
        <div className="w-9"><li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 font-black"
                : "hover:font-black"
            }
            to="/resume"
          >
            resume
          </NavLink>
        </li></div>
        <div className="w-9"><li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-2 font-black"
                : "hover:font-black"
            }
            to="/contact"
          >
            contact
          </NavLink>
        </li></div>
      </ul>
    </nav>
  );
}
