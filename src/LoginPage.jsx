import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign In to us</h2>
            <form action="/home" className='form-container'>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p><Link to="/input">
                <button id="sub_btn" type="submit">Log In</button>
                </Link>
                    
                </p>
                <footer>
                <p>First time ? <Link to="/register"> Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </form>
            
        </div>
    )
}
