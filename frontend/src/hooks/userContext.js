import { contextRegister } from "../backendcontext/usercontext"
import { useContext } from "react";

export const useTextContexts = () => {
    const context = useContext(contextRegister)
    if (!context) {
        throw Error("nmoooooooo")
    }
    return context
}