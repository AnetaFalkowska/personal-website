import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col bg-secondary-background text-secondary-text font-merriweather">
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
