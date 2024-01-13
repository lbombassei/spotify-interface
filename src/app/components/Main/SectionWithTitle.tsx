import React from "react";
import Image from "next/image";

interface SectionWithTitleProps {
  title: string;
  items: { src: string; alt: string; description: string }[];
}

const SectionWithTitle: React.FC<SectionWithTitleProps> = ({ title, items }) => (
  <>
    <h2 className='font-semibold text-2xl mt-10'>{title}</h2>
    <div className='grid grid-cols-5 gap-4 mt-4'>
      {items.map((item, index) => (
        <a key={index} className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image src={item.src} className="w-full" width={104} height={104} alt={item.alt}/>
          <strong className='font-semibold'>{item.alt}</strong>
          <span className='text-sm text-zinc-500'>{item.description}</span>
        </a>
      ))}
    </div>
  </>
);

export default SectionWithTitle;
