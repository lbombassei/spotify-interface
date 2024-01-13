import React from "react";
import Image from 'next/image';

interface CoverArtProps {
  src: string;
  alt: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ src, alt }) => (
  <div className="flex items-center gap-3">
    <Image src={src} width={56} height={56} alt={alt} />
    <div className='flex flex-col'>
      <strong className='font-normal'>Powerslave</strong>
      <span className="text-xs text-zinc-400">Iron Maiden</span>
    </div>
  </div>
);

export default CoverArt;
