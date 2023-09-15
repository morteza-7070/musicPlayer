import React,{useRef, useState} from 'react'
import './Music.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,faAngleLeft,faAngleRight,faPause} from "@fortawesome/free-solid-svg-icons"


export default function Music({currentSong, isplaying , setIsPlaying}) {
  const audioRef =useRef(null);
  const playSong=() =>{
    if(isplaying){
      audioRef.current.pause();
      setIsPlaying(!isplaying);
    }else{
      audioRef.current.play();
      setIsPlaying(!isplaying);
    }
    
  }
  const[songInfo,setSongInf] =useState(
    {currentTime:0,duration:0}
  )
  const timeUpdateHandler=(e) =>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    
    setSongInf({...songInfo,currentTime:currentTime,duration:duration})
  }
  const timeFormat= (time) =>{
    return( 
       
       Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
       )
     
  }
  const drag=(e) =>{
    audioRef.current.currentTime=e.target.value
    setSongInf({...songInfo,currentTime:e.target.value})
  }
  return (
    <div className='player'>
      <div className="item-control">
        <p>{timeFormat(songInfo.currentTime)}</p>
        <input type='range' onChange={drag} min={0} max={songInfo.duration} value={songInfo.currentTime}/>
        <p>{timeFormat(songInfo.duration)}</p>
        <div className="play-control">
            <FontAwesomeIcon className='back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon  onClick={playSong} className="play" size='2x' icon={isplaying ? faPause :faPlay}/>
            <FontAwesomeIcon  className='next' size='2x' icon={faAngleRight} />

        </div>
        <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
      </div>


      
    </div>
  )
}




