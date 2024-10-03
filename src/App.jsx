import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login'; // Update path
import Chat from './pages/Chat/Chat';   // Update path
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'; // Update path

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  );
};

export default App;