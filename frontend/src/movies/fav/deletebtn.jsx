import React,{useState} from 'react'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FavorHook} from "../../hooks/fav"
import {useTextContexts} from "../../hooks/userContext"
const Deletebtn = ({ id }) => {
  const { dispatch } = FavorHook()
  const [hover, setHover] = useState(false);
  const { user } = useTextContexts()
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

    const deleteFav = async () => {
        const response = await fetch(`https://thepotatomovies-1.onrender.com/api/favourite/${id}`, {
            method: 'DELETE',
            headers:{"Authorization": `Berare ${user.token}`}
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type:"DELETE_FAV", payload: json})
        }
    }
  return (
    <div>
    <FontAwesomeIcon  className={`heart ${!hover ? "clicked" : ""}`} icon={hover?faHeartBroken:faHeart} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} onClick={deleteFav} />
    </div>
  )
}

export default Deletebtn
