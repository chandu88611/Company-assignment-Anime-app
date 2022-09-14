import React from 'react'
import "./AnimeData.css"
// import AddtoWatchList from './AddtoWatchList'
function AnimeData({list,setInfo,addList}) {
  return (
    <div>
    <h3 className='h3'>AnimeData</h3>
    <div className="main_anime_container"> 
    {list.map((anime,index)=>(
      
        <div className="anime_container" key={index} onClick={()=>setInfo(anime)}>
            <img src={anime.images.jpg.image_url} alt="" className="anime_image" />
          <div className="details"> <h5>Title: <span>{anime.title}</span></h5>
            <h5> Rating:<span>{anime.rating}</span>     </h5>
            <h5> <span><a href={anime.url}>Detail</a></span></h5></div> 
            <button onClick={()=>addList(anime)}>AddtoList+</button>
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

export default AnimeData