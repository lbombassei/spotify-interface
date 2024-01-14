import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface CardProps {
  src: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ src, alt }) => (
  <a className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
    <Image src={src} width={96} height={96} alt={alt} className="h-full"/>
    <strong>{alt}</strong>
    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible transition'>
      <Play fill='bg-black'/>
    </button>
  </a>
);

export default Card;
