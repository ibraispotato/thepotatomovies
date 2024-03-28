import React, { useState } from 'react'

// import { useStateContext } from '../../context/getcontext'

import {ResetPassword} from "../hooks/resetpassword"
const Forgot = () => {
    const [password, setPassword] = useState("")



    const { reset, isLoading, error } = ResetPassword()
    const resetPasswordFun = async (e) => {
        e.preventDefault()
        await reset(password)
        }
    
        return (
            <div className='forgotdiv'>
                <div className='forgotdivs'>
                    <form className='indisdetheform' onSubmit={resetPasswordFun}>
                        <div className='textreset'>
                            <h1>Reset your password</h1>
                            <p className='parareset'>You can reset your password by including the following input
                            </p>
                        </div>
                        <input className={`resetInput ${password.length>0? "green" : "red"}`} placeholder='Password' value={password}name='password'type='password' onChange={(e)=> setPassword(e.target.value)}/>
                        <div className='erorAndBtnReset'>
                                   
                                <button className='submitbtn s' disabled={isLoading}>Reset</button>

                            
                            {error&&  <p className='er'>{error}</p>}
                        </div>
                    
                  
                </form>
                
                </div>
                
               
            </div>
        )
    }

export default Forgot
