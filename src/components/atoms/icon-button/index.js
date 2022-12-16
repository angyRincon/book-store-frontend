//@packages
import React from 'react';

//@styles
import classes from './styles.module.scss'
import classNames from "classnames";

const IconButton = ({ icon, color, handleClick }) => {

    const iconClasses = [
        classes[ color ]
    ].join(' ')

    return (
        <button
            onClick={handleClick}
            className={classNames(classes.iconButton, iconClasses)}
        >
            <span>
                <i className={icon} />
            </span>
        </button>
    );
};

export default IconButton;
