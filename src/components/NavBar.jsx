import React, {useState} from "react";
//import components BurguerButton and hooks
import BurgerButton from "./BurgerButton";
//import css
import './NavBar.css'

const Navbar = () => {
    //hook initial in false
    const [clicked, setClicked] = useState(false)

    //change to click denied form
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <header>
                <h2>VIDEOCLUB</h2>
                {/* concatenate with the condition if the status is true it is assigned the active class  */}
                <div className={`links ${clicked ? 'active' : ''}`}>
                {/* event to hide the menu */}
                    <a onClick={handleClick} href="/">Lista de peliculas</a>
                    <a onClick={handleClick} href="/">Agregar pelicula</a>
                </div>
                <div className="burger">
                    {/* change state button */}
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                {/* background Menu with the condition if the status is true it is assigned the active class */}
                <div className={`initial ${clicked ? 'active' : ''}`}></div>
            </header>
        </>
    );

};

export default Navbar;