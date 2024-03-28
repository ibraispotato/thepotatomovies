import { useState } from "react";
import {useNavigate}from "react-router-dom"

export const ForgotPass = () => {
    const [error,setError] = useState(null)
    const [isLoading, setLoading] = useState(null)
    const [Res, setRes] = useState(null)

    const forgotpassword = async (email) => {
        const response = await fetch("http://localhost:4000/api/register/forgotpassword", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email})
        })
        const json = await response.json()
        if (!response.ok) {
            setLoading(false)
            setError(json.error)
            
        }
        setRes(response.ok)
        if (response.ok) {
            // setError(null)
            setLoading(false)
            setError(null)
            setRes('Check your Email!')
        }
    }
    return {forgotpassword,error,isLoading,Res }
}