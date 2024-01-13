import React from "react";

const categories = [
  "Gospel",
  "Programming Vibes",
  "Rock",
  "Bateria",
  "This is Imagine Dragons",
  "This is Iron Maiden",
  "Haikaiss Antigas e Costa Gold",
  "Iconic Soundtracks",
];

const CategoryList: React.FC = () => (
  <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
    {categories.map((category, index) => (
      <a key={index} href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        {category}
      </a>
    ))}
  </nav>
);

export default CategoryList;
