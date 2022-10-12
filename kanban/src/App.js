import React from 'react'
import Account from './components/Account';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-3xl text-center font-bold underline">
          Kanban-Board
        </h1>
        <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>} 
          />
        </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
