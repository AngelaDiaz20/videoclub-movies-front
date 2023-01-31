import React, {useState} from "react";
import BurgerButton from "./BurgerButton";
import './NavBar.css'

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <header>
                <h2>VIDEOCLUB</h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a href="/">Lista de peliculas</a>
                    <a href="/">Agregar pelicula</a>
                </div>
                <div className="burger">
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                </div>
            </header>
        </>
    );

};

export default Navbar;