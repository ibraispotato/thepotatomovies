import React, { useState } from 'react'
import {useTextContexts} from "./userContext"
export const Logines = () => {
    const [error,setError] = useState(null)
    const [isLoading,setLoading] = useState(null)
    const { dispatch } = useTextContexts()
    const FunLogins = async (email,password) => {
        const response = await fetch("http://localhost:4000/api/register/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email,password})
        })
        const json = await response.json()
        console.log(response)
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
    return {FunLogins,isLoading,error}
   
}

