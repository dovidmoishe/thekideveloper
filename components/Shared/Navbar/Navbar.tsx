import React from "react";
import { FloatingNav } from "../../ui/floating-navbar";

type Props = {};

const Navbar = (props: Props) => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
     <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
    </>
  );
};

export default Navbar;
