            import { Link } from "react-router-dom";
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
            import { faStar } from '@fortawesome/free-solid-svg-icons'
            import {FavorHook} from "../../hooks/fav"
            import "../movie.css"
            import DeleBtn from "./deletebtn.jsx"
            import {useTextContexts} from "../../hooks/userContext"
            import { useEffect } from "react";
            const Favorites = () => {
                const { user } = useTextContexts()
                const { favourites,dispatch } = FavorHook()
                const showFavShow = async () => {
                    const response = await fetch("http://localhost:4000/api/favourite", {
                        
                        headers:{"Authorization": `Bearer ${user.token}`}
                    })
                    const json = await response.json()
                    if (response.ok) {
                        dispatch({type:"SET_FAV",payload:json})
                    }
                }
                
                useEffect(() => {
                    if (user) {
                        showFavShow()
                    }
                    
                },[dispatch,user])
                return (
                    <div>
                        <div className="fogWaT7t">
                        <div className="fog">
                            <div className="arrows">
                            </div>
                        </div>
                        <div className="t7to">
                                {favourites && favourites.map((data, index) => (
                                
                                    <>
                                        
                                <div key={index} className="theT7t">
                                <Link to={`movie/${data.IdOfTheMovie}`}>
                                    <div key={index} className="imr">
                                    <img alt="" className="imm" src={`https://image.tmdb.org/t/p/w200/${data.photoImg}`} />
                                    </div>
                                </Link>
                                        
                                        <div className="upo">
                                            <div className="wishlist">
                                                <DeleBtn id={data._id} />
                                        </div>
                                            <div className="sta">
                                                <FontAwesomeIcon className="stars" icon={faStar} />
                                            <p className="rarr">{Number(data.raitingOfTheMovie).toFixed(1)}/10</p>
                                            
                                        </div>
                                        
                                        </div>
                                <Link to={`movie/${data.IdOfTheMovie}`}>
                                    <div>
                                    <p className="mr">{data.nameOfTheMovie}</p>
                                    </div>
                                </Link>
                                </div>
                            </>
                            ))}
                                
                        </div>
                            <div>
                            </div>
                        </div>
                    </div>
                )
            }
            export default Favorites
