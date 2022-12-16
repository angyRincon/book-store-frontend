//@packages
import React from 'react';

//@styles
import classes from './styles.module.scss'

const CenteredContainer = ({ children }) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export default CenteredContainer;
