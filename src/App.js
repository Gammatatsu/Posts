
import '../src/styles/app.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';
import Navbar from './components/UI/navbar/Navbar';
import Error from './pages/Error';
import PostIdPage from './pages/PostIdPage';
import Login from './pages/Login';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';
import Loader from './components/UI/Loader/Loader';


function App() {
  const [isAuth,setIsAuth] = useState(false)
  const [isLoading,setLoading] = useState(true)
  
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
      setLoading(false)
      
  },[])

  if(isLoading){
    return <Loader/>
  }
  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        setLoading,
        isLoading,
    }}>
      <BrowserRouter>
        <Navbar />



        <Routes>
          {isAuth ?
            <><Route exact path="posts" element={<Posts />} />
              <Route path="about" element={<About />} />
              <Route path="error" element={<Error />} />
              <Route exact path="posts/:id" element={<PostIdPage />} />
              <Route path="/" element={<Navigate to="posts" replace />} />
              <Route exact path="*" element={<Error />} />
              <Route path="login" element={<Navigate to="/" replace />} />
            </>
            :
            <><Route exact path="Login" element={<Login />} />
              <Route path="*" element={<Navigate to="Login" replace />} />

            </>


          }


        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
