import React, { useState, useEffect,createContext, useReducer } from "react";
export const FavCon = createContext()
export const FavContext = (state, action) => {
    if (action.type === "SET_FAV") {
        return {favourites:action.payload}
    }
    else if (action.type === "CREATE_FAV") {
        return {
            favourites: [action.payload,...state.favourites]
        }
    }
    else if (action.type === "DELETE_FAV") {
        return {
            favourites:state.favourites.filter(f => f._id !== action.payload._id)
        }
    }
else {
        return state
    }
}

export const FavContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FavContext, {
        favourites:null||[]
    })
    return (
        <FavCon.Provider value={{
           dispatch,...state
        }}>
            {children}
        </FavCon.Provider>
    )
}

