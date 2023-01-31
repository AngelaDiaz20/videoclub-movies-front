import React from "react";
import './BurgerButton.css'

const BurgerButton = (props) => {

    return (
        <div onClick={props.handleClick} className={`icon nav-icon-2 ${props.cliked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default BurgerButton;