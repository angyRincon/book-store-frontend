//@packages
import React from 'react';
import { useNavigate } from "react-router-dom";

//@components
import Button from "../../atoms/button";
import CenteredContainer from "../../HOC/centered-container";

const Main = () => {
    const navigate = useNavigate();
    return (
        <CenteredContainer>
            <Button handleClick={() => navigate('add-book')} label='Add book'/>
        </CenteredContainer>
    );
};

export default Main;
