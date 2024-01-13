import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, MonitorSpeaker, Volume, Maximize2 } from "lucide-react";
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/powerslave.jpg" width={56} height={56} alt="Melhor album do iron maiden" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Powerslave</strong>
            <span className="text-xs text-zinc-400">Iron Maiden</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200'/>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                <Play fill='bg-black'/>
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20}className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'> 0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className="h-1 rounded-full w-20 bg-zinc-200"></div>
            </div>
            <span className='text-xs text-zinc-400'> 5:39</span>
          </div>
        </div>
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
      </footer>
    )
}