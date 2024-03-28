import React, { createContext, useState, useContext, useEffect } from "react";
import { apiURL } from "../api/apiURL";
import { TopApier } from "../api/topapi"

import { GetApiById } from "../api/getApiByid"

export const Context = createContext();

export const GetContext = ({ children }) => {
    const [trendAPi,setApiURLs] = useState([])
    const api = async () => {
      const key = "01a50d90a609598da2b24813512d62da"
      try {
          await fetch(`${apiURL}${key}`)
        .then(response => response.json())
        .then(response => setApiURLs(response.results))
        
      }catch (err) {
        console.log(err.messege)
      }
     
    }
    useEffect(() => {
        api()
    }, [])
    // console.log(trendAPi)
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const [topApi,setTopApi] = useState([])
    const topApis = async () => {
      const key = "01a50d90a609598da2b24813512d62da"
      try {
          await fetch(`${TopApier}${key}`)
        .then(response => response.json())
        .then(response => setTopApi(response.results))
        
      }catch (err) {
        console.log(err.messege)
      }
     
    }
    useEffect(() => {
      topApis()
    }, [])
  
  
  
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const [movieApi, setMovieApi] = useState([])
    const MovieApis = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
            }
        };
        try{
            await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${1}&sort_by=popularity.desc`, options)
            .then(response => response.json())
            .then(response => setMovieApi(response))
           
        }catch(err){
        console.log(err.messege)
            
        }
            
        }
        useEffect(() => {
        MovieApis()
        }, [])
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const [GetAPiByIds,setGetAPiByIds] = useState([])
    const GetAPiByIdser = async () => {
      const key = "01a50d90a609598da2b24813512d62da"
      try {
          await fetch(`${GetApiById}/${901362}?api_key=${key}`)
        .then(response => response.json())
        .then(response => setGetAPiByIds(response))
        
      }catch (err) {
        console.log(err.messege)
      }
     
    }
    useEffect(() => {
        GetAPiByIdser()
    }, [])
    ////////////////////////////////////////////////////////////////////////////////////////
    const [KeyWordsApis,setKeyWordsApis] = useState([])
    const KeyWordApier = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
            }
          };
      try {
          await fetch(`https://api.themoviedb.org/3/search/movie?query=${"saw"}&include_adult=false&page=1`, options)
        .then(response => response.json())
        .then(response => setKeyWordsApis(response))
        
      }catch (err) {
        console.log(err.messege)
      }
     
    }
    useEffect(() => {
        KeyWordApier()
    }, [])
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    const [popularApi,setPopularApi] = useState([])
    
    const pop = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
            }
          };
        try {
            await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${1}`, options)
                .then(response => response.json())
                .then(response => setPopularApi(response))
                
        } catch(err) {
            console.error(err)
        };
    }
    useEffect(() => {
        pop()
    }, [])
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
          await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setUpComing(response))
            
      } catch (err) {
        console.error(err)
      };
      
    }
    useEffect(() => {
        TheUpComing()
    }, [])
  //////////////////////////////////////////////////////////////////////////////////////////////
  const [geners,setGeners] = useState([])

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
  // console.log(geners)
    useEffect(() => {
      Geners()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  ////////////////////////////////////////////////////////TV Series/////////////////////////////////////////////////////////////////////////////
  const [SearchTv, setSearchTv] = useState([])
  const Search = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
      await fetch(`https://api.themoviedb.org/3/search/tv?query=${"super"}&include_adult=false&language=en-US&page=${1}`, options)
      .then(response => response.json())
      .then(response => setSearchTv(response))
    } catch (err) {
      console.error(err)
    }
    
  }
  useState(() => {
    Search()
  },[])
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [popularTv, setPopularTv] = useState([])
  const Popular = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
      await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${1}`, options)
        .then(response => response.json())
        .then(response => setPopularTv(response))
    } catch (err) {
      console.error(err);
    }
  }
    useState(() => {
      Popular()
    }, [])
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [topTv, setTopTv] = useState([])
  const TopTvs = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
        await fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${1}`, options)
      .then(response => response.json())
      .then(response => setTopTv(response.results))
    } catch (err) {
      console.error(err.messege)
      }
    
  }
  useState(() => {
    TopTvs()
  }, [])
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [insideTv, setInsideTv] = useState([])
  const IndideTvs = async () => {
 
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
    await fetch(`https://api.themoviedb.org/3/tv/${94605}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setInsideTv(response))
      
    } catch (err) {
      console.error(err)
  }
  }
    
    useState(() => {
      IndideTvs()
    }, [])
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [trendingTv, setTrendingTv] = useState([])
  const trendingTvs = async () => {
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
     await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
      .then(response => response.json())
      .then(response => setTrendingTv(response.results))
      
    } catch (err) {
      console.error(err)
  }
   
  }
  useState(() => {
    trendingTvs()
  }, [])
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [tvgeners,setTvGeners] = useState([])

  const TvGeners = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWE1MGQ5MGE2MDk1OThkYTJiMjQ4MTM1MTJkNjJkYSIsInN1YiI6IjY1NzJlMmRiNTViYzM1MDBhZDQ1OWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.za6TLqZJUsnND9IzMgmNlCs9YQuN6rUB3e7_XHmzmds'
      }
    };
    try {
      await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
      .then(response => response.json())
      .then(response => setTvGeners(response.genres))
      
    } catch (err) {
      console.log(err.messege)
    }
    
}
// console.log(geners)
  useEffect(() => {
    TvGeners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    return (
        <Context.Provider
            value={{
                topApi,///done
                trendAPi,///done
                movieApi,///done
                GetAPiByIds,///done
                KeyWordsApis,//done
                popularApi,//still
                upComing,//still
                SearchTv,//done
                popularTv,//still
                topTv,///done
                insideTv,//done
          trendingTv,///done
            setGeners,
          geners,
          tvgeners
        }}
        >
        {children}
    </Context.Provider>
        )
}
export const useStateContext =() => useContext(Context)
