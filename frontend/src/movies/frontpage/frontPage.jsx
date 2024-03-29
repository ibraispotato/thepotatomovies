
  import React, { useState, useEffect } from "react";
  import { v4 as uuidv4 } from 'uuid'
  import { Link } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar } from '@fortawesome/free-solid-svg-icons'
  import { faHeart } from '@fortawesome/free-solid-svg-icons'
  import { faX } from '@fortawesome/free-solid-svg-icons'
  import { FavorHook } from "../../hooks/fav.js"
  import {FavFun} from "../../hooks/anotherhhoks/favanotherhooks"
  import './frontpage.css';
  import {useTextContexts} from "../../hooks/userContext.js"

  uuidv4()
function FrontPage() {
  const { user } = useTextContexts()
  const [show, SetSHow] = useState(false)
  const [showTwo, SetSHowTwo] = useState(false)
  const { favFunction, error, setError, add, setAdd,theId } = FavFun()
  const { dispatch } = FavorHook()
  const [topApi, setTopApi] = useState([])


 
  
  const topApis = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
      await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setTopApi(response.results))
          
    }
    catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    topApis()
  }, [])
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [upComing, setUpComing] = useState([])
  const TheUpComing = async () => {
    const options = {
        
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
      await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${1}&primary_release_year=${2024}&sort_by=popularity.desc`, options)
        .then(response => response.json())
        .then(response => setUpComing(response.results))
            
    } catch (err) {
      console.error(err)
    };
      
  }
  useEffect(() => {
    TheUpComing()
  }, [])
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [upComingTwo, setUpComingTwo] = useState([])
  // console.log(upComing)
  const TheUpComingTwo = async () => {
    const options = {
        
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
      await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${2}&primary_release_year=${2024}&sort_by=popularity.desc`, options)
        .then(response => response.json())
        .then(response => setUpComingTwo(response.results))
            
    } catch (err) {
      console.error(err)
    };
      
  }
  useEffect(() => {
    TheUpComingTwo()
  }, [])
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [topApiTwo, setTopApiTwo] = useState([])
  const topApisr = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
      await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2', options)
        .then(response => response.json())
        .then(response => setTopApiTwo(response.results))
        
    }
    catch (err) {
      console.log(err.message);
    }
  }
  
  useEffect(() => {
    topApisr()
  }, [])
   
  const hanldewairning = () => {
    setError(null)
  }

  const hanldeAdd = () => {
    setAdd(null)
  }
 
  

    const showFavShow = async () => {
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
      showFavShow()
     
      }
        
    }, [dispatch, user])

   
  setTimeout(() => {
    setError(null)
  }, 7000)
      setTimeout(() => {
        setAdd(null)
      }, 7000)
      
    return (
      <div className="out">
        <div className="upser">
            <div className="solidReder"></div>
            <h3 className="trendTexts">Top Rated</h3>
        </div>
        <div className="outsidewrap">
        <div className="insideWrap">
          <div className="outsidewrapT">
            
            {topApi.map((data, index) => (
          
                <div className="indidewrap" key={index}>
                <Link to={`movie/${data.id}`}>
            <div className="imoges">
            <div className="imoge">
                
                  <p className="da">{parseInt(data.release_date)}</p>
              <img className="im" alt="" loading="preload" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
              
            </div>
                    </div>
                </Link>
                
                  <div className="alltexts">
                  <div className="heartsandbook">
                    
                    <FontAwesomeIcon id={index}
                      className={`heart ${theId.includes((data.id).toString()) ? "clicked" : ""}`}
                      onClick={() =>favFunction(data)} icon={faHeart} />
                      </div>
                      <Link to={`movie/${data.id}`}>
                    <div className="ras">
                      <div className="ra">
                        <FontAwesomeIcon className="stars" icon={faStar} />
                      <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
                      </div>
                    </div>
                  </Link>
                <Link to={`movie/${data.id}`}>
                  
                    <p className="textso">{data.title || data.original_name}</p>
                  </Link>
                    
            </div>
          </div>
            ))}
            
          </div>
          {show ? 
            <div className="outsidewrapT">
            {topApiTwo.map((data, index) => (
              <div className="indidewrap" key={index}>
                <Link to={`movie/${data.id}`}>
            <div className="imoges">
            <div className="imoge">
                  <p className="da">{parseInt(data.release_date)}</p>
              <img className="im" alt="" loading="preload" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
            </div>
                  </div>
                  </Link>
                  <div className="alltexts">
                  <div className="heartsandbook">
                    <FontAwesomeIcon id={index} className={`heart ${theId.includes((data.id).toString()) ? "clicked" : ""}`}
                      onClick={() => favFunction(data)} icon={faHeart} />
                  </div>
                <Link to={`movie/${data.id}`}>
              <div className="ra">
                      <FontAwesomeIcon className="stars" icon={faStar} />
                      <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
                    </div>
                  </Link>
                <Link to={`movie/${data.id}`}>
                  
                    <p className="textso">{data.title || data.original_name}</p>
                  </Link>
                    
            </div>
          </div>
            ))}
          </div>
              : ""}
            <div className="readMoreBtn">
              <button className={`btner ${show? "red" : "green"}`} onClick={() => SetSHow(prev => !prev)}>{show? "Get Less" : "Get More"}</button>
            </div>
            <div className="solidBluees"></div>
            <div className="upsers">
            <div className="solidReder"></div>
            <h3 className="trendTexts">Upcoming Movies</h3>
        </div>
            <div className="outsidewrapT">
              {upComing.map((data, index) => (
            
                <div className="indidewrap" key={index}>
                  <Link to={`movie/${data.id}`}>
              <div className="imoges">
              <div className="imoge">
                  
                    <p className="da">{parseInt(data.release_date)}</p>
                <img className="im" alt="" loading="preload" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
                
              </div>
                
                    </div>
                    </Link>
                    <div className="alltexts">
                    <div className="heartsandbook">
                      <FontAwesomeIcon id={index} className={`heart ${theId.includes((data.id).toString()) ? "clicked" : ""}`}
                        onClick={() => favFunction(data)} icon={faHeart} />
                    </div>
                  <Link to={`movie/${data.id}`}>
                    
                    <div className="ra">
                      
                        <FontAwesomeIcon className="stars" icon={faStar} />
                        <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
                      </div>
                    </Link>
                  <Link to={`movie/${data.id}`}>
                    
                      <p className="textso">{data.title || data.original_name}</p>
                    </Link>
                      
              </div>
              
            </div>
            
              ))}
              
            </div>
        
            {showTwo ? 
            <div className="outsidewrapT">
              
            {upComingTwo.map((data, index) => (
              
                
                <div className="indidewrap" key={index}>
                <Link to={`movie/${data.id}`}>
            <div className="imoges">
            <div className="imoge">
                
                  <p className="da">{parseInt(data.release_date)}</p>
              <img className="im" alt="" loading="preload" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
              
            </div>
              
                  </div>
          </Link>
                  
                  <div className="alltexts">
                  <div className="heartsandbook">
                    <FontAwesomeIcon id={index} className={`heart ${theId.includes((data.id).toString()) ? "clicked" : ""}`}
                      onClick={() => favFunction(data)} icon={faHeart} />
                  </div>
          <Link to={`movie/${data.id}`}>
                  
              <div className="ra">
                      <FontAwesomeIcon className="stars" icon={faStar} />
                      <p className="rarr">{(data.vote_average).toFixed(1)}/10</p>
                    </div>
                  </Link>
          <Link to={`movie/${data.id}`}>
                    <p className="textso">{data.title || data.original_name}</p>
                  </Link>
                    
            </div>
            
          </div>
          
            ))}
            
          </div>
              : ""}
            
            <div className="readMoreBtn">
              <button className={`btner ${showTwo ? "reds" : "greens"}`} onClick={() =>
                SetSHowTwo(prev => !prev)}>{showTwo ? "Get Less" : "Get More"}</button>
            </div>
          </div>
          
          <div className="solidReders"></div>
        
            
          
        </div>
        
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
  export default FrontPage