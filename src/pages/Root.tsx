import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../layouts/ScrollToTop";
import PageFooter from "../layouts/PageFooter";

export default function Root() {
  return (
    <div className="flex flex-col bg-secondary-background text-secondary-text font-merriweather">
      <ScrollToTop/>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <PageFooter/>
    </div>
  );
}
