import Header from './components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import AnimeData from './components/AnimeData';
import SearhContent from './components/SearhContent';
import Info from './components/Info';
import Filter from './components/Filter';
import AddtoWatchList from './components/AddtoWatchList';



function App() {
const [list, setlist]=useState([])
const [animelist,setAnimelist]=useState([])
const [search,setSearch]=useState()
const [aInfo,setInfo]=useState()


const [myAnimelist,setMyAnimelist]=useState([])
const getAllAnime=async()=>{
  const anime=await fetch('https://api.jikan.moe/v4/anime').then(res=>res.json())
  console.log( "animedata"+anime)
  setlist(anime.data.slice())
}

const add=(anime)=>{
  const present=myAnimelist.findIndex((myAnime)=>{
    return myAnime.mal_id === anime.mal_id
  })
  if(present < 0){
    const adedArray=[...myAnimelist,anime]
    setMyAnimelist(adedArray)
  }

}
 const removeList=(anime)=>{
   const newArray=myAnimelist.filter((myAnime)=>{
    return myAnime.mal_id !==anime.mal_id
   }
  
   )
  
   setMyAnimelist(newArray)
   
  
 }
useEffect(()=>{
  const data= JSON.parse(localStorage.getItem("myAnimelist"));
  if(data){
   setMyAnimelist(data);
 
  }
  console.log("data hjj"+data)
 },[])

useEffect(()=>{
  localStorage.setItem("myAnimelist",JSON.stringify(myAnimelist))
},[myAnimelist])




const fetchAnime= async ()=>{
    
  const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=10`)
  const resData=await res.json()

  console.log( "searched data" + resData.data.slice())
  setAnimelist(resData.data.slice())

}


useEffect(()=>{
  fetchAnime()
},[search])
useEffect(()=>{

  getAllAnime();

},[])
console.log(list)

  return (
    <div className="App">
    
    <Header />
    <input type="search" placeholder='search anime'
     onChange={(e)=>{
      setSearch(e.target.value)
     }} />
     {/* <h5><a href="/mylist">MYlist</a></h5> */}
  <div className="wrap">
     
    <div className="main_content1">
    <div className="main_content">
  
        <SearhContent animelist={animelist}
             setInfo={setInfo}
             addList={(anime)=>add(anime)}
        />
      
    </div>
    <div className="anime_details" >
    {aInfo && <Info  aInfo={aInfo}/>}</div>
    </div>
    
    <Filter   setInfo={setInfo}
             addList={(anime)=>add(anime)}  />
    <div className="_content">
    <AnimeData list={list} 
      setInfo={setInfo}
      
      addList={(anime)=>add(anime)}
    />
    </div>
    <AddtoWatchList List={myAnimelist}
      removeList={(anime)=>removeList(anime)}
    />
    </div>
    
    </div>
  );
}

export default App;
