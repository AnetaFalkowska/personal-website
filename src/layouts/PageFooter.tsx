import { CircleArrowUp } from "lucide-react";
import Button from "../layouts/Button.js";
import Container from "./Container.js";

// const scrollToTop = () => {
//   document.getElementById("resume-nav").scrollIntoView({ behavior: "smooth" });
// };

export default function PageFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-[#8B2750] via-[#902D5D] to-[#8B2750]  text-secondary-button-text text-sm">
      <Container>
        <div className="flex justify-center gap-6 sm:justify-between pt-8 sm:py-8 mx-auto">
          <div className="hidden sm:block sm:w-48">
            <p>&copy; 2024 Aneta Falkowska.</p>
            <p> All rights reserved.</p>
          </div>
          <div className="w-auto sm:w-48">
            <Button className="mx-auto text-base" variant="inverse" href="/files/Aneta_Falkowska_CV_en.pdf" download="Aneta_Falkowska_CV_en.pdf">
              Download CV
            </Button>
          </div>
          <div className="w-auto sm:w-48">
            <Button className="ml-auto" size="icon" onClick={scrollToTop}>
              <CircleArrowUp size={40} />
            </Button>
          </div>
        </div>
        <p className="sm:hidden text-center pb-4 pt-3">&copy; 2024 Aneta Falkowska. All rights reserved.</p>
      </Container>
    </footer>
  );
}
