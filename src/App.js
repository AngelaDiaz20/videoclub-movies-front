import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import AllMovies from './pages/AllMovies';
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<AllMovies/>} />
        <Route path='/add' element={<AddMovie/>} />
        <Route path='/edit/:id'element={<EditMovie/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;