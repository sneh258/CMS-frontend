/* eslint-disable no-unused-vars */
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Collection from './pages/Collection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Register />} />
        <Route path={'error/:errorCode?'} element={<Error />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/collection" element={<Collection/>} />
      </Routes>
    </BrowserRouter>
  );
}
