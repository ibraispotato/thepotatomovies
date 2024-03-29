        import React, { useState } from 'react'
        import { Link } from "react-router-dom";
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
        import { faSignOut } from '@fortawesome/free-solid-svg-icons';

        import { faVideo } from '@fortawesome/free-solid-svg-icons';
        import { faBars } from '@fortawesome/free-solid-svg-icons';

        import { faHeart } from '@fortawesome/free-solid-svg-icons';
        import { useTextContexts } from "../hooks/userContext"
        import {useLOgOut} from "../hooks/logout"
        import "./Nav.css"
        const Nav = () => {
            const {logoutERS} =useLOgOut()
            const { user } = useTextContexts()
            const logoutBtn = () => {
                if (!user) {
                    return 
                }
                logoutERS()
            }
            
            const [click, setClick] = useState(false)
            
        return (
            <div>
                
                    <div className='allNav'>
                        <div className='upNav'>
                            <Link to={"/"}>
                                <h2 className='potatomovies'>thePotomovies</h2>
                            </Link>
                        
                    </div>
                    {user ?
                        <div >
                            
                        <div className='downNavs'>
                            <div className='welcoming'>
                            <p className='wel'>Welcome {user.username}</p>
                                </div>
                               
                                <div className='downNav'>
                                    <Link to={"/movies"}>
                                        
                                <FontAwesomeIcon  className='icon' icon={faVideo} />
                            </Link>
                            
                                {<FontAwesomeIcon onClick={logoutBtn} className='icon' icon={faSignOut} />}
                            
                            <Link to={"/favorite"}>
                                <FontAwesomeIcon className='icon' icon={faHeart} />
                            </Link>
                                    </div>
                            </div>
                            </div>
                        :
                        <><div className={`downNav ${click ? "clickTrue" : "clickFalse"}`}>

                            <Link to={"/movies"}>
                                <FontAwesomeIcon className='icon' icon={faVideo} />
                            </Link>
                            <Link to={"/login"}>
                                {user ? <p>{user.username}</p> : <FontAwesomeIcon className='icon' icon={faUserCircle} />}
                            </Link>
                            <Link to={"/favorite"}>
                                <FontAwesomeIcon className='icon' icon={faHeart} />
                            </Link>

                        </div>
                           </>

                    }
                    </div>
                
            </div>
        )
        }

        export default Nav
