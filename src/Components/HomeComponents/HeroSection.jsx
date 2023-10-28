import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="text-7xl text-center h-screen w-full  flex flex-col items-center gap-16 justify-center text-text ">
      <h1 className="">Roadmaps for Students</h1>
      <h1
        className="text-center font-extrabold tracking-tight from-[#fbf818]  to-[#4a4c42] bg-gradient-to-r bg-clip-text"
        style={{ color: "transparent" }}
      >
        ZenRoutes
      </h1>
      <Link to="/roadmap" className="text-lg">
        Start your journey
      </Link>
    </div>
  );
}

export default HeroSection;
