import React, { useState, useEffect } from "react";
import { GetApiById } from "../../api/getApiByid"
import { useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import TheBtnTrash from "../../tvshows/deletext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './inside.css';
import Loader from "../loading/Loader"
import { Link } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useTextContext } from "../../hooks/textHook"
import InputText from "./inputtext"
import { useTextContexts } from "../../hooks/userContext"
import { FavFun } from "../../hooks/anotherhhoks/favanotherhooks"
import { FavorHook } from "../../hooks/fav.js"



const InsideMovies = () => {
  const { user } = useTextContexts()
  const { favFunction, error, setError, add, setAdd,theId } = FavFun()
  const { id } = useParams()
  const [GetAPiByIds, setGetAPiByIds] = useState([])
  const [GetMAPiByIds, setGetMAPiByIds] = useState([])
  const { dispatch:TheFavDis } = FavorHook()

  const [isLoading, setIsLoading] = useState(true);
  const { dispatch, review} = useTextContext()
    const GetAPiByIdser = async () => {
      const key = "01a50d90a609598da2b24813512d62da"
      try {
          await fetch(`${GetApiById}/${id}?api_key=${key}`)
        .then(response => response.json())
        .then(response => { setGetAPiByIds(response); setTimeout(() => {
          setIsLoading(false)
             }, 2000);
        })
      }catch (err) {
        console.log(err.messege)
      }
     
  }
  useEffect(() => {
    GetAPiByIdser()
  }, [isLoading])
  ////////////////////////////////////////////////////////////////////////
const GetMovie = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
    }
  };
 
  try {
      await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options)
    .then(response => response.json())
    .then(response => { setGetMAPiByIds(response.results); 
    })
  }catch (err) {
    console.log(err.messege)
  }
 
}

  useEffect(() => {
    GetMovie()
  },[])
  const aname = GetMAPiByIds?.map(res =>res)
  const filter = aname?.filter((item) => {
    return  item.type.includes("Trailer") & item.name.includes((item.name.includes(GetAPiByIds.title)?GetAPiByIds.title :"Trailer" )) && item.official===true
  })
  const all = filter.slice(0,1)
  const finish = all.map(res=>res.key)
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
  const TextShown = async () => {
    const response = await fetch("https://thepotatomovies-1.onrender.com/api/comments", {
      headers:{'Authorization': `Bearer ${id}`}
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({type:"SET",payload:json})
    }
  }
   useEffect(() => {
    
       TextShown()
    
   
   }, [dispatch])
   
   const showFavShow = async () => {
    const response = await fetch("https://thepotatomovies-1.onrender.com/api/favourite", {
          
      headers: { "Authorization": `Bearer ${user.token}` }
    })
    const json = await response.json()
    if (response.ok) {
      TheFavDis({ type: "SET_FAV", payload: json })
    }
  }

useEffect(() => {
  if (user) {
    showFavShow()
   
    }
      
  }, [dispatch, user])

  const hanldewairning = () => {
    setError(null)
  }

  const hanldeAdd = () => {
    setAdd(null)
  }
 
    
  /////fix it later with the css

   
  setTimeout(() => {
    setError(null)
  }, 7000)
      setTimeout(() => {
        setAdd(null)
        }, 7000)
  return (
    <div className="container">
    
      {isLoading ? <Loader /> :
        <>
          <>
              <img className="frontimgs" id="frontimg" loading="preload" src={`https://image.tmdb.org/t/p/original/${GetAPiByIds.backdrop_path}`} alt="" />
              <div className="uphero">
              
              <div className="hero">
          <div className="smals">
          <div className="arrowse">
          <Link to={"/"}>
            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
          </Link>
        </div>
            <div className="smal">
              <img className="smallimg" loading="preload" src={`https://image.tmdb.org/t/p/w500/${GetAPiByIds.poster_path}`} alt="" />
              <div className="rarings">
                <div className="upe">
                  <div className="wishlist">
                    <div className="heartsandbooks">
                            <FontAwesomeIcon
                               className={`heart ${theId.includes((GetAPiByIds.id).toString()) ? "clicked" : ""}`}
                              onClick={() =>favFunction(GetAPiByIds)} icon={faHeart} />
                    </div>
                  </div>
                  <div className="sta">
                    <FontAwesomeIcon className="stars" icon={faStar} />
                    <p className="rarr">{(GetAPiByIds.vote_average).toFixed(1)}/10</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
              <div className="solidRedss"></div>
              <div className="AlltextsAndInputs">
          <div className="alotOfTexts">
            <div className="thetitles">
              <h1 className="title">{GetAPiByIds.original_title || GetAPiByIds.title}</h1>
            </div>
            <div className="genrs">
              <p>{GetAPiByIds.genres?.[0].name}</p>
              <p>{GetAPiByIds.genres.length === 1 ? "" : <p>&</p>}</p>
              <p>{GetAPiByIds.genres.length === 1 ? "" : GetAPiByIds.genres?.[1].name}</p>
              <div className="dates">
                <p className="dot">•</p>
                <p>{parseInt(GetAPiByIds.release_date)}</p>
                <p className="dot">•</p>
              </div>
            </div>
            <div className="overview">
              <p className="overs">{GetAPiByIds.overview}</p>
                    </div>
                    <div className="video">
                      <iframe src={`https://www.youtube.com/embed/${finish}`} title="title" className="iframs" allow="fullscreen;" />

                    </div>
                
              </div>
             
                </div>
                
                </div>
                <div className="textsAndinputs">
                <InputText id={id} />
                <div className="theAllinputText">
                  {review&&review.map((data, index) => (
                    <div className="nameAndTextAndRaiting">
                      <div>
                        <h2>{data.theNameOfTheReview}</h2>
                        <p className="textpara">{data.text}</p>
                        <p>{"Made at "+formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}</p>
                        <div className="trashbtn">
                        {user===null ?"":user.user_ids ==="65fdd58866ecdb17973dcb64"?
                        user.user_ids === "65fdd58866ecdb17973dcb64" ? <TheBtnTrash id={data._id} /> : ""
                        :
                      data.TheTokenOfTheUser === user.user_ids ? <TheBtnTrash id={data._id} /> : ""
                      
                          }
                          </div>
                      </div>
                      
                    </div>
                    
                  ))}
                </div>
               
              </div>
              
            </div>
            
        </>
        </>

    }
   <div className={`theError ${error === null ? "notShow" :"show"}`}>
          {<h3 className="errtext">{error}</h3>}
          <div className="btnwarin" onClick={hanldewairning}>
            <button className="thebtn" ><FontAwesomeIcon icon={faX}/></button>
          </div>
            
          </div>
          <div className={`theError ${add === null ? "notShow" :"show"}`}>
            {<h3 className="errtext">{add}</h3>}
            <div className="btnwarin" onClick={hanldeAdd}>
            <button className="thebtn" ><FontAwesomeIcon icon={faX}/></button>
          </div>
          </div>
    </div>
  )
}

export default InsideMovies
