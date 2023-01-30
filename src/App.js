import React from "react";
import AllMovies from './pages/AllMovies';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllMovies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
