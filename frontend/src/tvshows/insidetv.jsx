
  import React, { useState, useEffect } from "react";
  import { useParams } from 'react-router-dom';
  import Loader from "./loading/loader"
  import { faStar } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './trneds.css';
  import { faHeart } from '@fortawesome/free-solid-svg-icons'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useTextContext } from "../hooks/textHook"
import {useTextContexts} from "../hooks/userContext"
import InputText from "../movies/insidethremovie/inputtext"
import { Showhooks } from "../hooks/showfav"
import { ShowFun } from "../hooks/anotherhhoks/anothershowFav"

import { faX } from '@fortawesome/free-solid-svg-icons'

import TheBtnTrash from "./deletext"
import { Link } from "react-router-dom";
        import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
  const InsideSHow = () => {
    const { id } = useParams()
    const [GetMAPiByIds, setGetMAPiByIds] = useState([])
    const { dispatch, review } = useTextContext()
    const { dispatch:theShowDis } = Showhooks()

    
    const {ShowFavFun, error,add,setError,setAdd,theId} = ShowFun()
    const { user } = useTextContexts()
    const [insideTv, setInsideTv] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    const IndideTvs = async () => {
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
          }
        };
        try {
            await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => { setInsideTv(response); setTimeout(() => {
              setIsLoading(false)
                }, 2000);
                })
        }catch (err) {
          console.log(err.messege)
        }
      
    }
    
    useState(() => {
      IndideTvs()
    }, [isLoading])
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    const GetMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
        }
      };
      
      try {
          await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,options)
        .then(response => response.json())
        .then(response => { setGetMAPiByIds(response.results); 
        })
        
            
        
        
      }catch (err) {
        console.log(err.messege)
      }
    
    }

    useEffect(() => {
      GetMovie()
    }, [isLoading])
      const aname = GetMAPiByIds?.map(res =>res)
      // const names = name.map(res=>res)
      const filter = aname?.filter((item) => {
        return  item.type.includes("Trailer") & item.name.includes((item.name.includes(insideTv.original_name || insideTv.title)? insideTv.original_name || insideTv.title:"Trailer"))
      })
      const all = filter.slice(0,1)
      const finish = all.map(res=>res.key)
    // console.log(GetMAPiByIds)
    
    
 
   const TextShowns = async () => {
    const response = await fetch("http://localhost:4000/api/comments", {
      headers:{'Authorization': `Bearer ${id}`}
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({type:"SET",payload:json})
    }
  }
   useEffect(() => {
    
       TextShowns()
    
   
   }, [dispatch])
   const showFavShow = async () => {
    const response = await fetch("http://localhost:4000/api/show", {
        
        headers:{"Authorization": `Bearer ${user.token}`}
    })
    const json = await response.json()
    if (response.ok) {
      theShowDis({type:"SET_SHOW",payload:json})
    }
}

  useEffect(() => {
    if (user) {
    showFavShow()
  }
    
},[dispatch,user])
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
      <><div className="container">
        {isLoading ?
          <Loader />
          :
            <>
          <>
              <img className="frontimgs" id="frontimg" loading="preload"
                src={`https://image.tmdb.org/t/p/original/${insideTv.backdrop_path}`} alt="" />
              <div className="uphero">
              
              <div className="hero">
          <div className="smals">
          <div className="arrowse">
          <Link to={"/thepotatomovies"}>
            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
          </Link>
        </div>
            <div className="smal">
              <img className="smallimg" loading="preload" src={`https://image.tmdb.org/t/p/w500/${insideTv.poster_path}`} alt="" />
              <div className="rarings">
                <div className="upe">
                  <div className="wishlist">
                    <div className="heartsandbooks">
                            <FontAwesomeIcon
                               className={`heart ${theId.includes((insideTv.id).toString()) ? "clicked" : ""}`}
                              onClick={() =>ShowFavFun(insideTv)} icon={faHeart} />
                    </div>
                  </div>
                  <div className="sta">
                    <FontAwesomeIcon className="stars" icon={faStar} />
                    <p className="rarr">{(insideTv.vote_average).toFixed(1)}/10</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
              <div className="solidRedss"></div>
              <div className="AlltextsAndInputs">
          <div className="alotOfTexts">
            <div className="thetitles">
              <h1 className="title">{insideTv.original_title || insideTv.name}</h1>
            </div>
            <div className="genrs">
              <p>{insideTv.genres?.[0].name}</p>
              <p>{insideTv.genres.length === 1 ? "" : <p>&</p>}</p>
              <p>{insideTv.genres.length === 1 ? "" : insideTv.genres?.[1].name}</p>
              <div className="dates">
                <p className="dot">•</p>
                <p>{parseInt(insideTv.first_air_date)}</p>
                <p className="dot">•</p>
              </div>
            </div>
            <div className="overview">
              <p className="overs">{insideTv.overview}</p>
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
      </div></>
    )
  }

  export default InsideSHow
