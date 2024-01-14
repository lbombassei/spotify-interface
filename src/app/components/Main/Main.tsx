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
        
          <Card key={1} src="/powerslave.jpg" alt="PowerSlave" />
          <Card key={2} src="/thisIsImagineDragons.jpg" alt="This is Imagine Dragons" />
          <Card key={3} src="/thisIsIronMaiden.jpg" alt="This is Iron Maiden" />
          <Card key={4} src="/Gospel.png" alt="Gospel" />
          <Card key={5} src="/haikaiss.png" alt="Haikaiss e Costa Gold" />
          <Card key={6} src="/iconic.png" alt="Iconic Soundtracks" />
        
      </div>
      <SectionWithTitle
        title="Made for Leonardo Bombassei"
        items={[
          { src: "/dm1.jpeg", alt: "Daily Mix 1", description: "The Worship Initiative, Hillsong Worship,..." },
          { src: "/dm2.jpeg", alt: "Daily Mix 2", description: "Some other artists" },
          { src: "/dm3.jpeg", alt: "Daily Mix 3", description: "Some other artists" },
          { src: "/dm4.jpeg", alt: "Daily Mix 4", description: "Some other artists" },
          { src: "/dm5.jpeg", alt: "Daily Mix 5", description: "Some other artists" },
        ]}
      />
    </main>
  );
}
