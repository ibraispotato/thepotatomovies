import React, { useState } from 'react'
import {useTextContexts} from "./userContext"
export const Signup = () => {
    const [error,setError] = useState(null)
    const [isLoading,setLoading] = useState(null)
    const { dispatch, user } = useTextContexts()
  
    const signups = async (username,email,password) => {
        setLoading(true)
        setError(null)
        const response = await fetch("http://localhost:4000/api/register/signup", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username,email,password})
        })
        console.log(response)
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

