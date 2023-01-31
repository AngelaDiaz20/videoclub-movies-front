import React from "react";
import {BrowserRouter} from 'react-router-dom';

//Components
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

import AllRoutes from "./routes/Routes"

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter> 
      <AllRoutes/>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;