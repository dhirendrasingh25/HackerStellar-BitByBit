import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ForgetPasswordPage from './ForgetPasswordPage'
import Input from './Input'

import './App.css'

function App(){
    return (
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<LandingPage />} />
                    <Route path="/login" element={ <LoginPage/>}/>
                    <Route path="/register" element={ <RegisterPage/>}/>
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/input" element={ <Input />}/>
        </Routes>       
        </BrowserRouter>
    )
}
export default App;