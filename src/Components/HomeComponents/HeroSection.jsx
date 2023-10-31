import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="text-5xl md:text-7xl text-center my-28 w-full  flex flex-col items-center gap-16 justify-center text-text ">
      <h1 className="">Roadmaps for Students</h1>
      <h1
        className="text-center font-extrabold tracking-tight from-[#fbf818]  to-[#4a4c42] bg-gradient-to-r bg-clip-text"
        style={{ color: "transparent" }}
      >
        ZenRoutes
      </h1>
      <Link
        to="/roadmap"
        className="text-lg text-secondary from-[#fbf818]  to-[#4a4c42] bg-gradient-to-r  py-2 md:py-3 px-5 md:px-7 rounded-3xl font-extrabold flex items-center justify-center gap-4 group"
      >
        Start journey
        <FaArrowRight className="group-hover:translate-x-3 transition-transform" />
      </Link>
    </div>
  );
}

export default HeroSection;
