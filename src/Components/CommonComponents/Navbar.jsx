
import {Link}  from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { RoadmapList } from "../../Data/RoadmapList";

const Navbar = () => {
  console.log(RoadmapList);
  return (
    <nav className="w-3/5 h-12 bg-background mx-auto my-4 rounded-3xl shadow-[rgba(_251,_248,_24,_0.7)_0px_0px_90px] box-border">
      <div>
        <Link to="/"></Link>
      </div>
    </nav>
  );
};

export default Navbar;
