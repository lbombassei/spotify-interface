import React from "react";

const PlaybackInfo: React.FC = () => (
  <div className='flex items-center gap-2'>
    <span className='text-xs text-zinc-400'> 0:31</span>
    <div className='h-1 rounded-full w-96 bg-zinc-600'>
      <div className="h-1 rounded-full w-20 bg-zinc-200"></div>
    </div>
    <span className='text-xs text-zinc-400'> 5:39</span>
  </div>
);

export default PlaybackInfo;
