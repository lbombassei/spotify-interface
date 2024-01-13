import React from "react";
import Icon from "./Icon";

interface NavItemProps {
  icon: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => (
  <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
    <Icon icon={icon} />
    {text}
  </a>
);

export default NavItem;
