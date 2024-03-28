import { useContext } from "react";
import { ShowCOntext } from "../backendcontext/showcontext"

export const Showhooks = () => {
    const context = useContext(ShowCOntext)
    if (!context) {
        throw Error("nmoooooooo")
    }
    return context
}