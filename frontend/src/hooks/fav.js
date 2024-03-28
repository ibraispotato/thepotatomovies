import { useContext } from "react";
import { FavCon } from "../backendcontext/favcontext"

export const FavorHook = () => {
    const context = useContext(FavCon)
    if (!context) {
        throw Error("nmoooooooo")
    }
    return context
}