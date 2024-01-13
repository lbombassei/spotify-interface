import React from "react";
import PaginationControls from "./PaginationControl";
import Card from "./Card";
import SectionWithTitle from "./SectionWithTitle";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <PaginationControls />
      <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Card key={index} src="/powerslave.jpg" alt="PowerSlave" />
        ))}
      </div>
      <SectionWithTitle
        title="Made for Leonardo Bombassei"
        items={[
          { src: "/powerslave.jpg", alt: "Daily Mix 1", description: "Wallows, COIN, girl in red and more" },
          { src: "/powerslave.jpg", alt: "Daily Mix 2", description: "Some other artists" },
          { src: "/powerslave.jpg", alt: "Daily Mix 3", description: "Some other artists" },
          { src: "/powerslave.jpg", alt: "Daily Mix 4", description: "Some other artists" },
          { src: "/powerslave.jpg", alt: "Daily Mix 5", description: "Some other artists" },
        ]}
      />
    </main>
  );
}
