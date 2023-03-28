import React, {useState} from 'react';
import './App.css';
import AuthForm from "../AuthForm/AuthForm";
import Main from "../Main/Main";
import {Routes, Route, useNavigate} from "react-router-dom";

function App() {
    const [isloggedIn, setLoggedIn] = useState<boolean>(false);

    const navigate = useNavigate();


    const handleLogin = ():void => {
        setLoggedIn(true);
        navigate('/');
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
                      <Main/>
                      // </ProtectedRoute>
                  }

              />

          </Routes>


      </div>
    </div>
  );
}

export default App;
