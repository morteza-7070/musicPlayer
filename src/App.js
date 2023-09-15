import React, { useState } from 'react';
import './App.css';
import Player from './components/Player/Player'
import Music from './components/music/Music'
import Data from './components/data/Data'
import SongList from './Song/SongList';





function App() {
   const[songs, setSongs] =useState(Data());
   
   const[currentSong,setCurrentSong]=useState(songs[0]);
   const [isplaying,setIsPlaying]=useState(false)
   
  return (
    <div className="App">
      <h1>Music Players</h1>
      <Player currentSong={currentSong} />
      <Music  currentSong={currentSong} isplaying={isplaying} setIsPlaying={setIsPlaying}/>
      <SongList songs={songs} setCurrentSong={setCurrentSong}/>   
      
     
    </div>
  );
}

export default App;
