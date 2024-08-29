import { CircleArrowUp } from "lucide-react";
import Button from "../layouts/Button.js";

const scrollToTop = () => {
  document.getElementById("resume-nav").scrollIntoView({ behavior: "smooth" });
};

export default function PageFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#8B2750] via-[#902D5D] to-[#8B2750]">
      <div className="w-[60%] flex justify-between text-secondary-button-text text-sm py-8 mx-auto">
        <div>
          <p>https://github.com/AnetaFalkowska</p>
          <p>502 394 679</p>
        </div>
        <Button variant="inverse" href="">
          Download CV
        </Button>
        <Button size="icon" onClick={scrollToTop}>
          <CircleArrowUp size={40} />
        </Button>   
      </div>
    </footer>
  );
}
