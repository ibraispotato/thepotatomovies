import React,{useState} from 'react'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useTextContext} from "../hooks/textHook"
import {useTextContexts} from "../hooks/userContext"
const Deletebtn = ({ id }) => {
  const { favourites, dispatch } = useTextContext()
  const [hover, setHover] = useState(false);
  const { user } = useTextContexts()
    const deleteFav = async () => {
        const response = await fetch(`https://thepotatomovies.onrender.com/api/comments/${id}`, {
            method: 'DELETE',
            headers:{"Authorization": `Berare ${user.token}`}
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type:"DELETE", payload: json})
        }
    }
  return (
    <div>
      <FontAwesomeIcon className={`heart ${hover ? "clicked" : ""}`} icon={faTrash} onClick={deleteFav} />
      {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
    </div>
  )
}

export default Deletebtn
