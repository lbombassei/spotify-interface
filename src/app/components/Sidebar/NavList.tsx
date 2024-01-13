import React from "react";
import NavItem from "./NavItem";

const navItems = [
  { icon: "home", text: "Home" },
  { icon: "search", text: "Search" },
  { icon: "library", text: "Your Library" },
];

const NavList: React.FC = () => (
  <nav className="space-y-5 mt-10">
    {navItems.map((item, index) => (
      <NavItem key={index} {...item} />
    ))}
  </nav>
);

export default NavList;
