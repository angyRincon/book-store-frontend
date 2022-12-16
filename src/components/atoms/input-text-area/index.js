import React from 'react';
import classes from "./styles.module.scss";

const InputTextArea = ({ name, value, handleChange, placeholder }) => {
    return (
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <textarea
                    name={name}
                    rows={3}
                    className={classes.input}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default InputTextArea;
