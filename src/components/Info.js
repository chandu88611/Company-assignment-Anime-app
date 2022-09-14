import React from 'react'
import  "./Info.css"
function Info({aInfo}) {
  return (
    
        <div className="container2" >
          <a href={aInfo.url} ><img className='info_image'  src={aInfo.images.jpg.large_image_url} alt="" /></a> 
           <h4> Title::<span>{aInfo.title}</span> </h4> 
           <h4>Score::<span>{aInfo.score}</span></h4>
           <h4> Type::<span>{aInfo.type}</span></h4>    
            <h4>Season::<span>{aInfo.season}</span></h4>
           <h4>rating::<span>{aInfo.rating}</span></h4>
           <h4>Year::<span>{aInfo.year}</span></h4>
           <h4>Source::<span>{aInfo.source}</span></h4>
           <h4>Status::<span>{aInfo.status}</span></h4>

        </div>
    
  )
}

export default Info