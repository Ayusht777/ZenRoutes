import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { RoadmapList } from "../../Data/RoadmapList";
import { HiChevronDown } from "react-icons/hi2";
import { useState } from "react";
const Navbar = () => {
  const [OnHover, setOnHover] = useState(false);

  return (
    <nav className="w-3/5 h-12 bg-background mx-auto my-4 rounded-3xl shadow-[rgba(_251,_248,_24,_0.7)_0px_0px_90px] box-border px-8 flex justify-between items-center">
      <div>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-9 h-9 rounded-full border-2 border-primary "
          />
        </Link>
      </div>
      <div>
        <ul className="flex justify-center items-center text-text gap-x-8 ">
          <li className="flex justify-center items-center">
            <Link>Home</Link>
          </li>
          <li className="flex justify-center items-center">
            <Link>
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
                  <div className=" w-32 h-auto  bg-text relative">
                    <ul className=" absolute top-2 bg-text w-full h-auto">
                      {RoadmapList.map((index, key) => {
                        console.log(index.language, key);
                        return (
                          <li key={key}>
                            <p>{index.language}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link>Team</Link>
          </li>
          <li className="flex justify-center items-center">
            <Link>About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
