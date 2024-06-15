import React from "react";
import "./Button.css";
import { useState } from "react";


const Button = (props) => {

    return (
        <button
            className={props.valor ? 'btn-num' : 'btn-ope'}
            onClick={() => props.clickBtn(props.children)}

        >{props.children}</button>

    );
}

export default Button;