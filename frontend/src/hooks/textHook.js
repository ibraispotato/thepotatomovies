import { TextContext } from "../backendcontext/textContext"
import { useContext } from "react";

export const useTextContext = () => {
    const context = useContext(TextContext)
    if (!context) {
        throw Error("nmoooooooo")
    }
    return context
}