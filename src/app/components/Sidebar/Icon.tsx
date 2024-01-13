import React from "react";
import { HomeIcon, Search, Library } from "lucide-react";

interface IconProps {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const icons: { [key: string]: JSX.Element } = {
    home: <HomeIcon />,
    search: <Search />,
    library: <Library />,
  };

  return icons[icon] || null;
};

export default Icon;
