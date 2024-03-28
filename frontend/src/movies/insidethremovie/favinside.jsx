
        import React, { useState } from "react";
        import Fav from "../fav/favorites"
        import FavShow from "../../tvshows/favshow/favshow"
        import './inside.css';
        import { Link } from "react-router-dom";
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Loader from "../../movies/loading/Loader"
import {FavorHook} from "../../hooks/fav"
import {Showhooks} from "../../hooks/showfav"

import {useTextContexts} from "../../hooks/userContext"
        
        const FavMovies = () => {

        const [isLoading, setIsLoading] = useState(true);
        const { favourites } = FavorHook()
        const { ShowFav } = Showhooks()
            
        const { user } = useTextContexts()
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        setTimeout(() => {
            setIsLoading(false)
            }, 1000);
        return (
            <div className="">
                {isLoading ?
                    < Loader />
                    :
                    <><div className="arrows">
                        <Link to={"/thepotatomovies"}>
                            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
                        </Link>
                        
                    </div>
                        {!user ? <div className="theh1">
                        
                            <h1>You need to login ☺</h1>
                        </div> :
                            <div className="fav">
                                
                                {favourites.length===0&&ShowFav.length===0?
                                    <div className="theh1">
                                <h1>There is No Movies/Shows ☺</h1>
                                </div> :
                                    
                                    <div className="upserss">
                                <div className="solidReder"></div>
                                            <h3 className="trendTexts">Favorite Movies</h3>
                                        
                                    </div>
                                }
                                <Fav />
                                {favourites.length===0&&ShowFav.length===0  ? "" :
                                    <div class="solidBlueess"></div>
                                }
                                {ShowFav.length===0  ? "" :
                                    <div className="upserss">
                            <div className="solidBlue"></div>
                            <h3 className="trendTexts">Favorite Shows</h3>
                                    </div>
                                }
                                
                                <FavShow />
                        
                            </div>
                        }
                    </>
                }
            </div>
            
        )
        }
        export default FavMovies