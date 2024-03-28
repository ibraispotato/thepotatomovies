import { useTextContexts } from "./userContext"
import { useTextContext } from "./textHook"
import { FavorHook } from "./fav"
import { Showhooks } from "./showfav"



export const useLOgOut = () => {
    ///LOGIN
    const { dispatch } = useTextContexts()
    ///notlogin
    const { dispatch: theDis } = useTextContext()
    const { dispatch: theFavDis } = FavorHook()
    const { dispatch: theFavShowDis } = Showhooks()

    
    const logoutERS = () => {
        localStorage.removeItem("user")
        dispatch({type:"LOGOUT"})
        theDis({ type:"SET",payload:null })
        theFavDis({ type:"SET_FAV",payload:null||[] })
        theFavShowDis({ type:"SET_SHOW",payload:null||[] })
        
    }
    return {logoutERS}
}