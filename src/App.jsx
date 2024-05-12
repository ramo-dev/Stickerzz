// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register';
import Loader from './components/ui/Loader';
import {Routes ,Route, BrowserRouter} from "react-router-dom";
import "./App.css";

function App() {
const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },2000)
    return () => clearTimeout(timer)
  },[])


  return (
    isLoading ? <Loader/> : (
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        {/* <Route path="/" component={Home}/> */}
      </Routes>
    </BrowserRouter>
    )
  )
}

export default App
