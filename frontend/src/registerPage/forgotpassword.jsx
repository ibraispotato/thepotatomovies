import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {ForgotPass} from "../hooks/forgotpassword"
const Forgot = () => {
    const [email, setEmail] = useState("")
    
    
    const { forgotpassword, isLoading, error,Res } = ForgotPass()
    
    const ForgotPassword = async (e) => {
        e.preventDefault()
        await forgotpassword(email)
        }
    return (
        <div className='forgotdiv'>
            <div className='forgotdivs'>
                <form className='indisdetheform' onSubmit={ForgotPassword}>
                    <div className='textreset'>
                        <h1 className='ResetPasswordText'>Reset your password</h1>
                        <p className='parareset'>To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process</p>
                    </div>
                    <input className={`resetInput ${email.length>0? "green" : "red"}`} placeholder='Email' value={email}name='email'type='email' onChange={(e)=> setEmail(e.target.value)}/>
                    <div className='erorAndBtnReset'>
                        {/* <Link to={error!==null? "/" : console.log("d")}> */}
                            <button className='submitbtn s' disabled={isLoading}>Submit</button>
                        {/* </Link> */}
                        
                        {Res === null ? <p className='er'>{error}</p> : <p className='er'>{Res}</p>}
                    </div>
                
              
            </form>
            
            </div>
            
           
        </div>
    )
    }

export default Forgot
