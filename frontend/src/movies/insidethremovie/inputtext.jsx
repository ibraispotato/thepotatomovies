import React,{useEffect, useState} from 'react'
import {useTextContext} from "../../hooks/textHook"


import { useTextContexts } from "../../hooks/userContext"
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Inputtext = ({id}) => {
    const [text, setText] = useState('')
    const textReq =150
    const [error, seterror] = useState(null)
    const { dispatch } = useTextContext()
    const { user } = useTextContexts()
    const HandleChange = async (e) => {
        e.preventDefault()
        if (!user) {
            seterror("you must be logged in")
            return
        }
    
        //////////////////////////////////
        const texters = { text } 
        const response = await fetch("https://thepotatomovies-1.onrender.com/api/comments", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token} ${id} `,
                "values": `${user.username}`,
                "keys": `${user.user_ids}`
                },
            body: JSON.stringify(texters)
        })
        const json = await response.json()
        
        if (!response.ok) {
            seterror(json.error)
        }
        if (response.ok) {
            dispatch({ type: 'CREATE', payload: json })
            setText("")
            seterror(null)
            
        }
    }
    const hanldeerror = (e) => {
        e.preventDefault()
        seterror("Sorry, your review is too short. It needs to contain at least 300 characters.")
    }
    return (
        <div className='containerText'>
            <div className='textreq'>
                {text.length<150?
                    <>
                        <p className='reqChara'>Required characters:</p>
                        <p className='textReqRed'>{textReq - text.length}</p>
                    </>
                    :
                    <p className='textReqGreen'>Minimum character limit met.</p>
                }
            </div>
            <form className='formEdit' onSubmit={textReq<text.length? HandleChange: hanldeerror}>
                <textarea className={`theTextArea ${text.length<150 ? "red" : "green"}`}  rows="10" cols="50"type='text' value={text} placeholder='Write your review here' onChange={(e) => setText(e.target.value)} />
                {error && <p className='errorInsideMovie'>{error}</p>}
                <button className='submitRev'>Submit</button>
                
            </form>
            
    </div>
  )
}

export default Inputtext
