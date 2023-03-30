import React, {useState} from 'react';
import './App.css';
import AuthForm from "../AuthForm/AuthForm";
import Main from "../Main/Main";
import {Routes, Route, useNavigate} from "react-router-dom";
import * as jose from 'jose'
import Cookies from 'universal-cookie';



function App() {
    const [isloggedIn, setLoggedIn] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoggedIn(true);
        await getJwtToken()
        navigate('/');
    }

    const getJwtToken = async () => {
        const secret = await new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET)
        const alg = 'HS256'
        const jwt = new jose.SignJWT({ 'urn:example:claim': true })
            .setProtectedHeader({ alg })
            .setExpirationTime('8d')
            .sign(secret)

        await jwt.then((token) => {
            const cookies = new Cookies();
            cookies.set('jwt', token, { path: '/' });
        })
    }

    const handleLogout = () => {
        const cookies = new Cookies();
        cookies.remove('jwt', { path: '/' });
        setLoggedIn(false);
        navigate('/signin');
    }

  return (
    <div className="page">
      <div className="page__content">
          <Routes>
              <Route
                  path='/signin'
                  element={
                          <AuthForm
                              handleLogin={handleLogin}
                          />
                  }
              />
              <Route
                  path='/'
                  element={
                      // <ProtectedRoute path='/signup' loggedIn={loggedIn}>
                      <Main
                          handleLogout={handleLogout}
                      />
                      // </ProtectedRoute>
                  }

              />

          </Routes>


      </div>
    </div>
  );
}

export default App;
