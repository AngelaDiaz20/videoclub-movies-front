import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import EditMovie from "../pages/EditMovie";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<AllMovies />} />
                <Route path="/all" element={<Navigate to="/"/>} />
                <Route path='/add' element={<AddMovie />} />
                <Route path='/edit/:id' element={<EditMovie />} />
            </Routes>
        </>
    );
};

export default AllRoutes;