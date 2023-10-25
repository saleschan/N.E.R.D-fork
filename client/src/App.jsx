import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import SingUp from './pages/Singup'
import './global.css'
import { ThemeProvider } from '@mui/material'
import { authTheme } from './themes/authTheme'
import Overview from './pages/Overview'


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={authTheme}>
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route element={<Home />} path="home" />
          <Route element={<SingUp />} path='cadastro0' />
          <Route element={<Overview />} path='main' />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
