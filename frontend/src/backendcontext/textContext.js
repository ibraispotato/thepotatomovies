import React, { useState, useEffect,createContext, useReducer } from "react";
export const TextContext = createContext()
export const textReduxer = (state, action) => {
    if (action.type === "SET") {
        return {review:action.payload}
    }
    if (action.type === "CREATE") {
        return{review:[action.payload,...state.review]}
    }
     if (action.type=== "DELETE") {
         return {
            review:state.review.filter((e) => e._id !==action.payload._id)
        }
    }
    else {
        return state
    }
}
export const TextContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(textReduxer, {
        review:null||[]
    })
    return (
        <TextContext.Provider value={{
            dispatch, ...state
        }}>
            {children}
        </TextContext.Provider>
    )
}