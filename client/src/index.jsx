import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Rain from './Rain.jsx'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/rain' element={<Rain/>}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  </BrowserRouter>
);

