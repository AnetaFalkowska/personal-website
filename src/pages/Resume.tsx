import DeskImg from "../assets/desk.png";
import ProfilePicture from "../assets/Aneta1.jpg";
import Button from "../components/Button";


export default function Navbar() {

  return (
    <div className="w-[100%] flex flex-col">
      <section className="flex">
        <div className="flex-grow">
          <nav className="flex justify-center bg-secondary text-secondary-button-text font-thin italic py-8 m-0">
            <ul className="flex gap-8">
              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#about">About me</a>
              </li>
              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#education">Education & Experience</a>
              </li>

              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#skills">Skills & Languages</a>
              </li>

              <li className="text-center hover:text-gray-400 whitespace-nowrap">
                <a href="#interests">Interests</a>
              </li>
            </ul>
          </nav>
          <div className="flex-grow h-[400px] relative">
            <img
              src={DeskImg}
              className="w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="absolute bottom-20 left-8 text-secondary-button-text">
              <p className="uppercase text-2xl font-thin tracking-widest mb-2">
                Hello, I'm
              </p>
              <p className="text-6xl font-black mb-5">Aneta Falkowska.</p>
              <p className="italic text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[30%] max-w-[320px] flex flex-col gap-10 justify-end items-center bg-secondary text-secondary-button-text pb-12">
          <img src={ProfilePicture} className="w-40 rounded-[50%] shadow-lg" />
          <div className="text-center text-sm">
            <p>https://github.com/AnetaFalkowska</p>
            <p>aneta.falkowska@gmail.com</p>
            <p>502 394 679</p>
          </div>
          <Button
            variant="inverse"
            className="flex justify-center w-48"
            href=""
          >
            Download CV
          </Button>
        </div>
      </section>
      <section>About me</section>
      <section>Education</section>
      <section>Skills</section>
    </div>
  );
}
