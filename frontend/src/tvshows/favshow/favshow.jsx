    import DeleBtn from "./delebtnshow.jsx"
        import { Link } from "react-router-dom";
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        import { faStar } from '@fortawesome/free-solid-svg-icons'
        import { faHeart } from '@fortawesome/free-solid-svg-icons'
        import {Showhooks} from "../../hooks/showfav.js"
import { useEffect } from "react";
        import {useTextContexts} from "../../hooks/userContext.js"
const Favorites = () => {
    const { ShowFav, dispatch } = Showhooks()
    const { user } = useTextContexts()
    const showFavShow = async () => {
        const response = await fetch("https://thepotatomovies-1.onrender.com/api/show", {
            
            headers:{"Authorization": `Bearer ${!user?"":user.token}`}
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type:"SET_SHOW",payload:json})
        }
    }
    
    useEffect(() => {
        showFavShow()
    },[dispatch,user])
        return (
            <div>
                
                    
                <div className="fogWaT7t">
                <div className="fog">
                </div>
                <div className="t7to">
                    {ShowFav&&ShowFav.map((data, index) => (
                    <>
                        <div key={index} className="theT7t">
                        <Link to={`show/${data.IdOfTheShow}`}>
                            <div className="imr">
                            <img alt="" className="imm" loading="preload" src={`https://image.tmdb.org/t/p/w200/${data.photoImg}`} />
                            </div>
                        </Link>
                                
                                <div className="upo">
                                    <div className="wishlist">
                                    <DeleBtn id={data._id}/>
                                </div>
                                    <div className="sta">
                                        <FontAwesomeIcon className="stars" icon={faStar} />
                                    <p className="rarr">{Number(data.raitingOfTheShow).toFixed(1)}/10</p>
                                    
                                </div>
                                
                                </div>
                        <Link to={`show/${data.IdOfTheShow}`}>
                            <div>
                        
                            <p className="mr">{data.nameOfTheShow}</p>
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
