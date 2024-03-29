import React, { useState } from 'react'
import { Showhooks } from "../showfav"
import {useTextContexts} from "../userContext"


export const ShowFun = () => {
    const [error, setError] = useState(null)
    const [add,setAdd] = useState(null)
    const { dispatch,ShowFav } = Showhooks()
    const { user } = useTextContexts()
    const theId = ShowFav.map((res) => res.IdOfTheShow)

    const ShowFavFun = async (data) => {
        if (!user) {
            setError("you must be logged in")
            return
        }
        const response = await fetch("https://thepotatomovies.onrender.com/api/show", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
                
            },
            body: JSON.stringify({
                photoImg: data.poster_path,
                nameOfTheShow: data.title||data.original_name,
                raitingOfTheShow: data.vote_average,
                theId:!user?"":data.id+user.user_ids,
                theDatOfTheShow: data.first_air_date,
                IdOfTheShow: data.id
            })
            
        })
        const json = await response.json()
        if (!response.ok) {
            setAdd(null)
            setError(json.error)
            if (!user) {
                setError("you must be logged in")
                return
            }
        
        }
        if (response.ok) {
            setAdd("New Show in your list")
            setError(null)
            dispatch({type:"CREATE_SHOW",payload:json})
        }
    }
    return { ShowFavFun, error,add,setError,setAdd,theId }
}