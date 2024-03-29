import React, { useState } from 'react'
import { FavorHook } from "../fav"
import {useTextContexts} from "../userContext"

export const FavFun = () => {
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(null)
    const [add,setAdd] = useState(null)
    const { dispatch, favourites } = FavorHook()
    const { user } = useTextContexts()
    const theId = favourites.map((res) => res.IdOfTheMovie)
    
    const favFunction = async (data) => {
        
        if (!user) {
            setError("you must be logged in")
            return
        }
        const response = await fetch("https://thepotatomovies-1.onrender.com/api/favourite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
                "Authorization": `Berare ${user.token}`
            },
            body: JSON.stringify({photoImg: data.poster_path,
                nameOfTheMovie: data.title,
                raitingOfTheMovie: data.vote_average,
                theId: !user?"":data.id+user.user_ids,
                theDatOfTheMovie: data.release_date,
                IdOfTheMovie:data.id
            })
        })
        const json = await response.json()
        
        
            if (!response.ok) {
                setLoading(false)
                setAdd(null)
            setError(json.error)
                if (!user) {
                    // setError("you must be logged in")
                    return
                }
        }
        
        
        
        if (response.ok) {
            setLoading(false)
            setError(null)
            setAdd("New Movie in your list")
            dispatch({ type: "CREATE_FAV", payload: json })
        }
       
    }
   
    return {favFunction,error,setError,add,setAdd,theId}
}