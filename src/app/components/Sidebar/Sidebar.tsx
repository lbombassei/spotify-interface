import React from "react";
import Icon from "./Icon";
import NavList from "./NavList";
import CategoryList from "./CategoryList";

export const Sidebar: React.FC = () => (
  <aside className="w-72 bg-zinc-950 p-6">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-red-500 rounded-full" />
      <div className="w-3 h-3 bg-yellow-600 rounded-full" />
      <div className="w-3 h-3 bg-green-600 rounded-full" />
    </div>
    <NavList />
    <CategoryList />
  </aside>
);
