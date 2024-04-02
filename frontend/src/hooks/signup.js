import React, { useState } from 'react'
import {useTextContexts} from "./userContext"

export const Signup = () => {
    const [error,setError] = useState(null)
    const [isLoading,setLoading] = useState(null)
    const { dispatch } = useTextContexts()
    const signups = async (username,email,password) => {
        
        const response = await fetch("https://thepotatomovies-1.onrender.com/api/register/signup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username,email,password})
        })
        const json = await response.json()
        if (!response.ok) {
            setLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            setLoading(false)
            localStorage.setItem("user",JSON.stringify(json))
            dispatch({type:"LOGIN",payload:json})
        }
    }
    return {signups,isLoading,error}
}