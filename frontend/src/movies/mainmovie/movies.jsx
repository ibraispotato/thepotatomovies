import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Loader from "../loading/Loader"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import FilterYears from "../filteryears/filterYears";
import { FavFun } from "../../hooks/anotherhhoks/favanotherhooks"
import { faX } from '@fortawesome/free-solid-svg-icons'
import {useTextContexts} from "../../hooks/userContext.js"
import { FavorHook } from "../../hooks/fav.js"
import Nav from "../../Nav/Nav.jsx"
import "../movie.css"
const MAinMovies = () => {
  const { user } = useTextContexts()

    const [movieApi, setMovieApi] = useState([])
    const [text, setText] = useState("")
    const [number, setNumber] = useState(1)
    const [Year, setYear] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [gener, setGener] = useState(0)
  const [geners, setGeners] = useState([])
  const { favFunction, error, setError, add, setAdd, theId } = FavFun()
  const { dispatch } = FavorHook()
  
    const Geners = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
        }
      };
      try {
        await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => setGeners(response.genres))
        
      } catch (err) {
        console.log(err.messege)
      }
      
  }
    useEffect(() => {
      Geners()
    }, [])
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const MovieApis = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
            }
          };
          
        try{
            
          await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${number}&primary_release_year=${Year}&sort_by=popularity.desc` , options)
                .then(response => response.json())
            .then(response => { setMovieApi(response.results); setTimeout(() => {
              setIsLoading(false)
                }, 1000);
          })
                
        }catch(err){
        console.log(err.messege)
            
        }
            
        }
        useEffect(() => {
          MovieApis()
          
        }, [number,gener,geners,isLoading,gener,Year])
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const showFavMovie = async () => {
    const response = await fetch("https://thepotatomovies-1.onrender.com/api/favourite", {
          
      headers: { "Authorization": `Bearer ${user.token}` }
    })
    const json = await response.json()
    if (response.ok) {
      dispatch({ type: "SET_FAV", payload: json })
    }
  }

useEffect(() => {
  if (user) {
    showFavMovie()
   
    }
      
  }, [dispatch, user])

 
  const hanldewairning = () => {
    setError(null)
  }

  const hanldeAdd = () => {
    setAdd(null)
  }
 
    


   
  setTimeout(() => {
    setError(null)
  }, 7000)
      setTimeout(() => {
        setAdd(null)
        }, 7000)
  return (
    <div>
       {isLoading ? 
        
          < Loader />
  :
        <>
          <Nav />
          <div className="fogWaT7t">
          <div className="fog">
            <div className="input">
              <input type="text" onChange={(e) => setText(e.target.value)} value={text} className="in" placeholder="Search......" />
              <Link to={`/movies/${text}`}>
                <button className="btners">Search</button>
              </Link>
            </div>
            <div className="arrows">
              <Link to={"/"}>
                <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
              </Link>
            </div>
            <div className="btns">
              <Link to={"/movies"}>
                <button className={`bobo ${gener === 0 ? "active" : ""}`} onClick={() => setGener()}>All</button>
              </Link>
              {geners.map(data => (

                <div className="alotbtn">
                  <Link to={`/movies/gener/${data.id}`}>
                    <button key={data.id} className={`bobo ${gener === data.id ? "active" : ""}`} onClick={(e) => setGener(data.id)}>{data.name}</button>
                  </Link>
                  <div>

                  </div>
                </div>


              ))}
              <FilterYears text={text} setNumber={setNumber} setYear={setYear} gener={gener} />

            </div>
          </div>
          <div className="t7t">
            {movieApi.map((data, index) => (
              <>
                <div key={index} className="theT7t">
                  <Link to={`movie/${data.id}`}>
                    <div className="imr">
                      <img alt="" loading="preload" className="imm" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
                    </div>
                  </Link>

                  <div className="upo">
                    <div className="wishlist">
                      <div className="heartsandbooks">
                        <FontAwesomeIcon className={`heart ${theId.includes((data.id).toString()) ? "clicked" : ""}`}
                          onClick={() => favFunction(data)} icon={faHeart} />
                      </div>
                    </div>
                    <div className="sta">
                      <FontAwesomeIcon className="stars" icon={faStar} />
                      <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>

                    </div>


                  </div>

                  <Link to={`movie/${data.id}`}>
                    <div>

                      <p className="mr">{data.title || data.original_name}</p>
                    </div>
                  </Link>
                </div>

              </>
            ))}

          </div>
          <div>
            <div className="nums">

              <button className="one" id="minus" onClick={() => setNumber(prev => prev === 1 ? 1 : --prev)}>prev</button>


              <p className="oneer">{number}</p>

              <button className="one" id="plus" onClick={() => setNumber(prev => ++prev)}>next</button>

            </div>
          </div>
        </div>
          <div className={`theError ${error === null ? "notShow" : "show"}`}>
            {<h3 className="errtext">{error}</h3>}
            <div className="btnwarin" onClick={hanldewairning}>
              <button className="thebtn"><FontAwesomeIcon icon={faX} /></button>
            </div>
          </div>
          <div className={`theError ${add === null ? "notShow" : "show"}`}>
            {<h3 className="errtext">{add}</h3>}
            <div className="btnwarin" onClick={hanldeAdd}>
              <button className="thebtn"><FontAwesomeIcon icon={faX} /></button>
            </div>
          </div>
        </>
      }
    </div>
  )
 
}

export default MAinMovies