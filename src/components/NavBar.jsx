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
                    <a onClick={handleClick} href="/">Lista de peliculas</a>
                    <a onClick={handleClick} href="/add">Agregar pelicula</a>
                </div>
                <div className="burger">
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                {/* bgMenu */}
                <div className={`initial ${clicked ? 'active' : ''}`}></div>
            </header>
        </>
    );

};

export default Navbar;