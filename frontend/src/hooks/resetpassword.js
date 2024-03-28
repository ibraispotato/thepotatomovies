import { useState } from "react";
import {useNavigate,useParams}from "react-router-dom"




export const ResetPassword = () => {
    const [error,setError] = useState(null)
    const [isLoading, setLoading] = useState(null)
    const { token } = useParams()
    const navigates = useNavigate()

    // console.log(token)
    const reset = async (password) => {
        setLoading(true)
        setError(null)
        const response = await fetch(`http://localhost:4000/api/register/resetpassword/${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({password})
        })
        const json = await response.json()
        console.log(json)
        if (!response.ok) {
            setLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // setError(null)\
            navigates("/login")
            setLoading(false)
            
        }
    }
    return {reset,error,isLoading}

}