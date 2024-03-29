import React,{useState} from 'react'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Showhooks} from "../../hooks/showfav"
import {useTextContexts} from "../../hooks/userContext"
const Deletebtn = ({ id }) => {
  const { dispatch } = Showhooks()
  const [hover, setHover] = useState(false);
  const { user } = useTextContexts()
  const handleMouseIn = () => {
    setHover(true);
};

  const handleMouseOut = () => {
    setHover(false);
  };

    const deleteFav = async () => {
        const response = await fetch(`https://thepotatomovies.onrender.com/api/show/${id}`, {
            method: 'DELETE',
            headers:{"Authorization": `Berare ${user.token}`}
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type:"DELETE_SHOW", payload: json})
        }
    }
  return (
    <div>
    <FontAwesomeIcon  className={`heart ${!hover ? "clicked" : ""}`} icon={hover?faHeartBroken:faHeart} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} onClick={deleteFav} />
    </div>
  )
}

export default Deletebtn
