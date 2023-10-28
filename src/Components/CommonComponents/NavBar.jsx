import { useState } from "react";

import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center relative border-b-4 border-gray-400  my-6">
      <h1 className="w-full px-9 text-4xl font-extrabold text-zinc-900 ">
        Fake Shop
      </h1>
      <div className="flex">
        <Link to="/AddToCard" className="mr-12"></Link>
      </div>
    </div>
  );
};

export default NavBar;
