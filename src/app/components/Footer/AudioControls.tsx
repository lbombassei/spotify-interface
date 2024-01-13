import React from "react";
import { Mic2, LayoutList, MonitorSpeaker, Volume, Maximize2 } from "lucide-react";

const AudioControls: React.FC = () => (
  <div className='flex items-center gap-4'>
    <Mic2 size={18} />
    <LayoutList size={18} />
    <MonitorSpeaker size={18} />
    <div className='flex items-center gap-2'>
      <Volume size={18} />
      <div className='h-1 rounded-full w-24 bg-zinc-600'>
        <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
      </div>
    </div>
    <Maximize2 size={18} />
  </div>
);

export default AudioControls;
