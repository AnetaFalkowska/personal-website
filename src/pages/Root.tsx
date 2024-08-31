import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../layouts/ScrollToTop";
import PageFooter from "../layouts/PageFooter";

export default function Root() {
  return (  
      <>
        <ScrollToTop />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <PageFooter />
      </>

  );
}
