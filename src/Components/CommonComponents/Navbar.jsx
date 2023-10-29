import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { RoadmapList } from "../../Data/RoadmapList";
import { HiChevronDown } from "react-icons/hi2";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
  const [OnHover, setOnHover] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className=" w-[95%] md:w-3/5 h-12 bg-background mx-auto my-4 rounded-3xl shadow-[rgba(_251,_248,_24,_0.7)_0px_0px_90px] box-border px-8 flex justify-between items-center text-text">
      <div>
        <Link to="/" className="flex gap-4 item-center justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-9 h-9 rounded-full border-2 border-primary "
          />
          <h2 className="hidden md:flex items-center ">Home</h2>
        </Link>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-x-8 ">
          <li className="flex justify-center items-center">
            <div className=" w-32 h-9 rounded-3xl  border-2 border-primary flex justify-center items-center">
              {OnHover ? (
                <div className="flex justify-center items-center gap-x-2">
                  <div>
                    <p>Roadmaps</p>
                  </div>
                  <div>
                    <HiChevronDown></HiChevronDown>
                  </div>
                </div>
              ) : (
                <div className="w-32 h-auto  bg-text relative">
                  <ul className=" absolute top-2 bg-text w-full h-auto">
                    {RoadmapList.map((value, key) => {
                      return (
                        <Link to={`/roadmaps/${value.id}`} key={key}>
                          <p>{value.language}</p>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-4">
        <Link to="/team">Team</Link>

        <Link to="/aboutus">About Us</Link>
      </div>
      {openNav ? (
        <div
          onClick={() => {
            setOpenNav(false);
          }}
          className="lg:hidden relative"
        >
          <FaXmark />
          <div className="absolute z-10  px-5 py-7 my-8 bg-secondary gap-4 right-1 top-0 rounded-lg">
            <Link
              to="/team"
              className="block py-2 px-4 m-4 hover:bg-primary rounded-lg"
            >
              Team
            </Link>
            <Link
              to="/aboutus"
              className="block py-2 px-4 m-4 hover:bg-primary rounded-lg"
            >
              About_Us
            </Link>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setOpenNav(true);
          }}
          className="lg:hidden"
        >
          <FaBars />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
