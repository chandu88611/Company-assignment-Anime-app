import React, {useState, useEffect } from 'react'
import "./AnimeData.css"
import  "./Filter.css"
function Filter({setInfo,addList}) {
  const[genre,setGenre]=useState([])
   const[filter,setFilter]=useState()
const filterAnime= async ()=>{
    
  const res=await fetch(`https://api.jikan.moe/v4/anime?q=${filter}&limit=8`)
  const resData=await res.json()
  const finalData=resData.data.slice()
  console.log( "filltered data" + finalData)
  setGenre(finalData)

}
useEffect(()=>{
  filterAnime()

},[filter])


  return (         
    <div className="filterContainer">
        
        <div className="button_container">
        <button onClick={()=>setFilter("comedy")}>comedy</button>
        <button onClick={()=>setFilter("action")}>Action</button>
        <button onClick={()=>setFilter("romance")}>Romance</button>
        <button onClick={()=>setFilter("movie")}>Movie</button>
        <button onClick={()=>setFilter("horror")}>horror</button>
        <button onClick={()=>setFilter("drama")}>Drama</button>
        </div>
        <div className="filtered_anime_container">
          
           <div className="main_anime_container1"> 
    {genre.map((anime,index)=>(
      
        <div className="anime_container_filter" key={index} onClick={()=>setInfo(anime)}>
            <img src={anime.images.jpg.image_url} alt="" className="anime_image1" />
          <div className="details1"> <h5>Title: <span className='span'>{anime.title}</span></h5>
          
        </div> 
            <button onClick={()=>addList(anime)}>AddtoList+</button>
        </div>
    ))}
  
    </div>




        </div>


    </div>
  )
}

export default Filter