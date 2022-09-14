import React from 'react'
import "./AnimeData.css"
function AddtoWatchList({List,removeList}) {
  return (
    <div className="my_list">
    <h2 style={{  
        background: "radial-gradient(circle, rgb(248, 251, 63) 0%, rgb(100, 247, 144) 100%)"
 }}  >My List</h2>
       <div className="main_anime_container"> 
    {List.map((anime,index)=>(
      
        <div className="anime_container" key={index} >
            <img src={anime.images.jpg.image_url} alt="" className="anime_image" />
          <div className="details"> <h5>Title: <span>{anime.title}</span></h5>
            <h5> Rating:<span>{anime.rating}</span>     </h5>
            <h5> <span><a href={anime.url}>Detail</a></span></h5></div> 
            <button onClick={()=>removeList(anime)}>Remove</button>
        </div>
    ))}
    {/* {genre.map((anime,index)=>(
      
      <div className="anime_container" key={index} onClick={()=>setInfo(anime)}>
          <img src={anime.images.jpg.image_url} alt="" className="anime_image" />
        <div className="details"> <h5>Title: <span>{anime.title}</span></h5>
          <h5> Rating:<span>{anime.rating}</span>     </h5>
          <h5> <span><a href={anime.url}>Detail</a></span></h5></div> 
      </div>
  ))} */

  }
    </div>
    </div>
  )
}

export default AddtoWatchList