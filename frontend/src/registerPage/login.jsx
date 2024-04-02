import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logines } from "../hooks/login"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useStateContext } from '../context/getcontext'

import "./register.css"
const Login = () => {
    // const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { trendAPi } = useStateContext()
    const [current, setCurrent] = useState(0)
    const length = trendAPi.length
    setTimeout(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        }, 4000);
        
    
    const { FunLogins, isLoading, error } = Logines()
   
    const LoginSubmit = async (e) => {
        e.preventDefault()
        await FunLogins(email,password)
        }
    return (
        <div className='containerreg'>
            <div className='left'>
                <div className='Thearrows'>
                     <Link to={"/"}>
                            <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
                        </Link>
                </div>
                
                     <div className='loginAndDontHaveAnAccount'>
                    <h1>Log in to your account</h1>
                    <div className='bothSignUp'>
                        <h2 className='donthaveandaccoutnclass'>Don't have an account?</h2>
                        <Link to={'/signup'}>
                            <h2 className='sign'>Sign Up</h2>
                        </Link>
                    </div>
                </div>
                <div className='textandline'>
                    <div className='divline'></div> 
                    <p className='logintextup'>Login with you'r email and password</p>
                    <div className='divline'></div>
                </div>
                    <div className='inputsandbtnslogin'>
                        <form onSubmit={LoginSubmit}>
                        <div className='inputslogin'>
                            
                            <input className={`inputers ${email.length>0? "green" : "red"}`} placeholder='Email' value={email}name='email'type='email' onChange={(e)=> setEmail(e.target.value)}/>
                <input className={`inputers ${password.length>0? "green" : "red"}`} value={password} placeholder='Password' name='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='btngers'>
                            <button disabled={isLoading}
                            onPaste={(e)=>{
                                e.preventDefault()
                                return false;
                                }} onCopy={(e) => {
                                    e.preventDefault()
                                    return false;
                                }}
                                className='submitbtn'>Submit</button>
                             <Link to={'/forgotpassword'}>
                            <p >Forgot Password?</p>
                            </Link>
                            
                        </div>
                </form>
               {error && <p className='er'>{error}</p>}
                    
                </div>
                
               
            </div>
            <div class="solidReds"></div>
            <div className='right'>
                <div className='textsRight'>
                    <h1 className='wl'>welcome</h1>
                    <div className='theparas'>
                        <p className='thepara'>You can discover all the movies & shows over here!</p>
                    <p className='thepara'>if you want to get all the features you need to login or sign up</p>
                    </div>
                    
                </div>
            
            {trendAPi.map((data, index) => (
                
                    <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (<img className="frontimges" alt="" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} />)}
                </div>
                
                    ))}
            </div>
                
        </div>
    )
    }

export default Login
