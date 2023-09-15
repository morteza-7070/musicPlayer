import React from 'react'

import  './Player.scss'


export default function Player({currentSong}) {
  return (
    <div className='song'>
        <div className='song-container'>
        <img src={currentSong.cover}  alt="" ></img>
        <h1>{currentSong.name}</h1>
        
        <h2>{currentSong.artist}</h2>
        
        
      
    </div>
      
    </div>
  )
}
