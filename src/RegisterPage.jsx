import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join Us! </h2>
            <h3> --! Create your personal account !--  </h3>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <Link to="/input">
                    <button id="sub_btn" type="submit">Register</button>
                    </Link>
                </p>
                <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </form>
            
        </div>
    )

}
