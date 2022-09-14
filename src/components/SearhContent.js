import React from 'react'
import "./SerchContent.css"
import  "./AnimeData.css"
function SearhContent({animelist,setInfo,addList}) {
  return (
  <div className="container1">
    {
      animelist.map(sAnime=>(
        <div className="sAnime_content" key={sAnime} onClick={()=>setInfo(sAnime)}>
          <img  className="anime_image"
          src={sAnime.images.jpg.image_url} alt="" />
          
           <h5>{sAnime.title}</h5>
           <button onClick={()=>addList(sAnime)}>AddtoList+</button>
        </div>
      ))
    }
  </div>
  )
}

export default SearhContent