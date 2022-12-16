//@packages
import React from 'react';

//@styles
import classes from './styles.module.scss'
import classNames from "classnames";

const Button = ({ label, type, color, handleClick }) => {

    const buttonClassName = [
        classes[color]
    ].join(' ')

    return (
        <button
            className={classNames(classes.button, buttonClassName)}
            type={type}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};

export default Button;
