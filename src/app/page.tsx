import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, MonitorSpeaker, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer/Footer';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft/>
              </button>
              <button className='rounded-full bg-black/40 p-1 '>
                <ChevronRight/>
              </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/powerslave.jpg" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong>PowerSlave</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible transition'>
                <Play  fill='bg-black'/>
              </button>
            </a>
            <a className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/powerslave.jpg" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong>PowerSlave</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible transition'>
                <Play  fill='bg-black'/>
              </button> 
            </a>
            <a className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/powerslave.jpg" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong>PowerSlave</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible transition'>
                <Play  fill='bg-black'/>
              </button>
            </a>
            <a className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/powerslave.jpg" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong>PowerSlave</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible transition'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/powerslave.jpg" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong>PowerSlave</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible transition'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/powerslave.jpg" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong>PowerSlave</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible transition'>
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Good Afternoon</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/powerslave.jpg" className="w-full" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/powerslave.jpg" className="w-full" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/powerslave.jpg" className="w-full" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/powerslave.jpg" className="w-full" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red and more</span>
            </a>
            <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src="/powerslave.jpg" className="w-full" width={104} height={104} alt="Melhor album do iron maiden"/>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'> Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
