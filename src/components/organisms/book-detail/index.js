//@packages
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

//@components
import CenteredContainer from "../../HOC/centered-container";
import Button from "../../atoms/button";

//@styles
import classes from './styles.module.scss';
import { useMutation, useQuery } from "@apollo/react-hooks";
import { DELETE_BOOK, GET_BOOK, GET_BOOKS } from "../../../services/books";

const BookDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    const { data, loading } = useQuery(GET_BOOK, { variables: { id } });
    const book = data?.book?.data;

    const [deleteBook] = useMutation(DELETE_BOOK, {
        refetchQueries: [
            {query: GET_BOOKS},
            'books'
        ]
    })

    const handleNavigate = () => navigate(`/edit-book/${id}`)

    const handleDelete = async () => {
        await deleteBook({variables: { id }})
        navigate('/books');
    }

    if (loading) return <div>loading...</div>
    return (
        <CenteredContainer>
            <div className={classes.container}>
                <h1>{book?.title}</h1>
                <p>{book?.description}</p>

                <div className={classes.actions}>
                    <Button
                        label='Edit'
                        color='info'
                        handleClick={handleNavigate}
                    />
                    <Button
                        label='Delete'
                        color='error'
                        handleClick={handleDelete}
                    />
                </div>
            </div>
        </CenteredContainer>
    );
};

export default BookDetail;
