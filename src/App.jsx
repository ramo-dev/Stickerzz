// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import {Routes ,Route, BrowserRouter} from "react-router-dom";
import "./App.css"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        {/* <Route path="/" component={Home}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
