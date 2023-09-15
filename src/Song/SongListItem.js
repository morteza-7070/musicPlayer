import React from 'react'
import './Song.scss'

export default function SongListItem({song,setCurrentSong}) {
  return (
    <div onClick={() =>{setCurrentSong(song)}} className='song1'>
      <div className='song-container'>
        <img src={song.cover}  alt="" ></img>
       <div className="flex">
          <h1>{song.name}</h1>
    
          <h2>{song.artist}</h2>
       </div>
    
    
  
</div>
  
</div>
  )
}
