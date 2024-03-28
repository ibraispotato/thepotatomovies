import React, { useState, useEffect, createContext, useReducer } from "react";
export const ShowCOntext = createContext()
export const showReducer =(state, action) => {
    if (action.type === "SET_SHOW") {
        return {
            ShowFav:action.payload
        }
    }
    else if (action.type === 'CREATE_SHOW') {
        return {
            ShowFav:[action.payload,...state.ShowFav]
        }
    }
    else if (action.type === "DELETE_SHOW") {
        return {
            ShowFav:state.ShowFav.filter(w => w._id !==action.payload._id)
        }
    }
    else {
        return state
    }
}
export const Showfavorite = ({children}) => {
    const [state, dispatch] = useReducer(showReducer, {
        ShowFav:null||[]
    })
    return (
        <ShowCOntext.Provider value={{
            dispatch,...state
        }}
            
        >
            {children}
        </ShowCOntext.Provider>
    )
}