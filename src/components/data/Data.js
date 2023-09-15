import { v4 as uuidv4 } from 'uuid';
import  './Data.scss'



export default function Data() {
  return [
    {
        name:"عشق یعنی",
        cover:"https://www.tasvirezendegi.com/wp-content/uploads/2015/08/%D9%81%D8%B1%D8%B2%D8%A7%D8%AF-%D9%81%D8%B1%D8%AE.jpg",
        artist:"فرزاد فرخ",
        audio:'https://ups.music-fa.com/tagdl/1402/Farzad%20Farokh%20-%20Eshgh%20Yani%20(320).mp3',
        color:["#5f27cd","#00d2d3"],
        id:uuidv4(),
        active:true
    },
    {
      name:"برداشت رفت",
      cover:"https://static0.namehnews.com/servev2/GEzMzlmZDdlM/5Uwvb7W7Zm0,/file.jpg",
      artist:"محسن ابراهیم زاده",
      audio:"https://dls.music-fa.com/tagdl/1402/Mohsen%20EbrahimZade%20-%20Ehsane%20Motlagh%20(320).mp3",
      color:["#f5f6fa","#718093"],
      id:uuidv4(),
      active:true
     },
     {
      name:"دل",
      cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2FPPBpI3gHgrEs739JnfUSF4-PWGIqKJ_yjMXY-fzidjM05p0_YBZEP2oBnrPJbND4A&usqp=CAU",
      artist:"رضا بهرام",
      audio:"http://dl.tabamusic.com/Music/1398/09/Reza Bahram - Del (128).mp3",
      color:[],
      id:uuidv4(),
      active:true
     },
      {
      name:"نوافن",
      cover:"https://images.hamshahrionline.ir/images/2012/9/reza-sadeghi.jpg",
      artist:"رضا صادقی",
      audio:"https://files.musico.ir/siros/Reza%20Sadeghi%20-%20Novafen%20(320).mp3",
      color:[],
      id:uuidv4(),
      active:true
     }
     ,{
      name:"یارا",
      cover:"https://files.namnak.com/users/fm/aup/201808/817_pics/%D8%A8%D9%87%D9%86%D8%A7%D9%85-%D8%A8%D8%A7%D9%86%DB%8C.jpg",
      artist:"بهنام بانی",
      audio:"https://ups.music-fa.com/tagdl/1402/Behnam%20Bani%20-%20SagBand(320).mp3",
      color:[],
      id:uuidv4(),
      active:true
     }
  ]
   
  
}

