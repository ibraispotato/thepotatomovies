    import React, { useState, useEffect } from "react";
        import { Link } from "react-router-dom";
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
        import { faStar } from '@fortawesome/free-solid-svg-icons'
        import Loader from "../loading/Loader"
        import { FavFun } from "../../hooks/anotherhhoks/favanotherhooks"
        import {useTextContexts} from "../../hooks/userContext.js"
        import { FavorHook } from "../../hooks/fav.js"
          
        import { faHeart } from '@fortawesome/free-solid-svg-icons'
        import { faX } from '@fortawesome/free-solid-svg-icons'
        import { useParams } from "react-router-dom";
        import { useStateContext } from '../../context/getcontext'
        import "../movie.css"
        const Movies = () => {
        const {generes,search } = useParams()
            const [movieApi, setMovieApi] = useState([])
            const [text, setText] = useState("")
            const [number, setNumber] = useState(1)
            const {favFunction,error,setError,add,setAdd,theId} = FavFun()
            const [isLoading, setIsLoading] = useState(true);
            const [gener, setGener] = useState()
            const { geners } = useStateContext()
            const { dispatch } = FavorHook()
            const { user } = useTextContexts()
    
            const MovieApis = async () => {
                const options = {
                    method: 'GET',
                    headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
                    }
                };
                
                try{
                    
                await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${number}` , options)
                        .then(response => response.json())
                    .then(response => { setMovieApi(response.results); setTimeout(() => {
                    setIsLoading(false)
                        }, 500);
                })
                        
                }catch(err){
                console.log(err.messege)
                    
                }
                    
                }
                
                useEffect(() => {
                MovieApis()
                }, [text,number,gener,generes,isLoading])
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
                <div className="fogWaT7t">
                <div className="fog">
                    <div className="input">
                    <input type="text" onChange={(e) => setText(e.target.value)} value={search&&text} className="in" placeholder="Search" />
                    <Link to={`/movies/${text}`}>
                    <button className="btners" onClick={() => setNumber(1)}>Search</button>
                    </Link>
                            </div>
                    <div className="arrows">
                    <Link to={"/"}>
                        <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
                    </Link>
                    {/* <h1>Latest Movies:</h1> */}
                    </div>
                    <div className="btns">
                    <Link to={`/movies`}>
                    <button className={`bobo ${gener !== undefined ? "active" : ""}`} onClick={() => setGener(0)}>All</button>
                    </Link>
                        {geners.map(data => (
                            <Link to={`/movies/gener/${data.id}`}>
                        <div className="alotbtn">
                        <button key={data.id} className={`bobo ${generes == data.id ? "active" : ""}`} onClick={(e) => setGener(data.id)}>{data.name}</button>
                        <div>
                        </div>
                        </div>
                        </Link>
                        
                    ))}
                    
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
                                            <FontAwesomeIcon
                                                className={`heart ${theId.includes((data.id).toString()) ? "clicked" : ""}`}
                                                onClick={() =>favFunction(data)} icon={faHeart} />
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
                    
                        <button className="one" id="minus" onClick={()=>setNumber(prev => prev === 1 ? 1 : --prev)}>prev</button>
                    <p className="oneer">{number}</p>
                        <button className="one" id="plus"   onClick={() => setNumber(prev => ++prev)}>next</button>
                    </div>
                    </div>
                    
                </div>
                }
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
            </div>
            
        )
        
        }

        export default Movies
