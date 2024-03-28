    import React, { useState } from "react";
    import { useStateContext } from '../../context/getcontext'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faStar } from '@fortawesome/free-solid-svg-icons'
    import { Link } from "react-router-dom";
    import FrontPage from "../frontpage/frontPage";
import Loader from "../loading/Loader"
import NavBar from "../../Nav/Nav"
  import '../frontpage/frontpage.css';
    
    import '../trend.css';
    const TrendApi = ({setShow}) => {
        const { trendAPi } = useStateContext()
        const [current, setCurrent] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
        const length = trendAPi.length
        setTimeout(() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
            }, 100000);
            setTimeout(() => {
                setIsLoading(false)
                }, 2000);
            
        
        return (
            <>
                
                <div className="bigSlid">

                {isLoading ?

                    <Loader /> //
                        :
                        
                    <>
            <NavBar />
                        <div className="upers">
                            {trendAPi.map((data, index) => (
                                <>
                                    <div className={index === current ? "slide active" : "slide"} key={index}>
                                        {index === current && (<img className="frontimg" alt="" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} />)}
                                    </div>
                                    <div className={index === current ? "texts active" : "texts"}>
                                        <div className="ups">
                                            <div className="solidRed"></div>
                                            <h3 className="trendText">Trending Hits</h3>
                                        </div>
                                        <div className="title">
                                            <h1 className="TitleName">{data.original_title || data.name}</h1>
                                        </div>
                                        <div className="ratitngAndYear">
                                            <div className="someofRating">
                                                <div className="rating">
                                                    <FontAwesomeIcon className="star" icon={faStar} />
                                                    <p className="rar">{(data.vote_average).toFixed(1)}/10</p>
                                                    <div>
                                                        <p className="dot">•</p>
                                                    </div>
                                                </div>
                                                <div className="date">
                                                    <p>{parseInt(data.release_date)}</p>
                                                    <p className="dot">•</p>
                                                </div>
                                                <div className="en">
                                                    <p className="ens">{data.original_language}</p>
                                                </div>
                                            </div>
                                            <div className="overview">
                                                <p className="over">{data.overview}</p>
                                            </div>
                                        </div>
                                        <div className={index === current ? "btn active" : "btn"}>
                                            <Link to={`movie/${data.id}`}>
                                                {index === current && (<button className="dis">DISCOVER</button>)}
                                            </Link>
                                            <button className="dis" onClick={() => setShow(prev => !prev)}>Shows</button>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <FrontPage />
                    </>}
            </div></>
    )
    }

    export default TrendApi
