//@packages
import React from 'react';

//@styles
import classes from './styles.module.scss'

const InputText = ({ name, placeholder, value, startIcon, handleChange }) => {
    return (
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                {startIcon && <i className={startIcon} />}
                <input
                    type="text"
                    name={name}
                    className={classes.input}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    autoComplete='off'
                />
            </div>
        </div>
    );
};

export default InputText;
