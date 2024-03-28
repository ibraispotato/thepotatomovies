import React, { useState, useEffect, createContext, useReducer } from "react";
export const contextRegister = createContext()
export const userRegister = (state, action)  => {
    if (action.type=== "LOGIN") {
        return {user:action.payload}
    }
    if (action.type === "LOGOUT") {
        return {user:null}
    }
    else {
        return state
    }
}
export const USerRegistrationProvider = ({children}) => {
    const [state, dispatch] = useReducer(userRegister, {
        user:null
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch({type: "LOGIN", payload: user})
            
        }
    },[])
    return (
        <contextRegister.Provider value={{
            dispatch,...state
        }}>
            {children}
        </contextRegister.Provider>
    )
}