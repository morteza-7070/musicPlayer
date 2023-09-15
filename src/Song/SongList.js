import React from 'react'
import SongListItem from './SongListItem'
import './Song.scss'

export default function SongList({songs,setCurrentSong}) {
  return (
    <div className='song-List'>
        <h2>لیست پخش</h2>
        
        <div className="listItem">
        {songs.map((song) => (
           <SongListItem  song={song} key={song.id} setCurrentSong={setCurrentSong}/>
                ))} 
        </div>
            
        
            
               
        
      
    </div>
  )
}
