// /* eslint-disable no-unused-vars */
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Collection from './pages/Collection';
import SingleCollection from './pages/SingleCollection';
import SingleField from './pages/SingleField';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  const token = localStorage.getItem('jwt_token');
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Register />} />
        <Route path={'error/:errorCode?'} element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={token?<Dashboard />:<Login/>} />
        <Route path="/dashboard/collection/:id" element={token?<Collection />:<Login/>} />
        <Route path="/dashboard/collection/" element={token?<SingleCollection />:<Login/>} />
        <Route path="/dashboard/content/:id" element={token?<SingleField />:<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
