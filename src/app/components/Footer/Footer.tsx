import React from "react";
import CoverArt from "./CoverArt";
import Controls from "./Controls";
import PlaybackInfo from "./Playbackinfo";
import AudioControls from "./AudioControls";

export const Footer: React.FC = () => (
  <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
    <CoverArt src="/powerslave.jpg" alt="Melhor album do iron maiden" />
    <div className="flex flex-col items-center">
      <Controls />
      <PlaybackInfo />
    </div>
    <AudioControls />
  </footer>
);
