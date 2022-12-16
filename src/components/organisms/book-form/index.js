//@packages
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from "@apollo/react-hooks";

//@components
import CenteredContainer from "../../HOC/centered-container";
import InputText from "../../atoms/input-text";
import InputTextArea from "../../atoms/input-text-area";
import Button from "../../atoms/button";

//@services
import { CREATE_BOOK, GET_BOOK, GET_BOOKS, UPDATE_BOOK } from "../../../services/books";

//@styles
import classes from './styles.module.scss'
import { useNavigate, useParams } from "react-router-dom";

const BookForm = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    const [dataForm, setDataForm] = useState({});

    const [createBook] = useMutation(CREATE_BOOK, {
        refetchQueries: [
            { query: GET_BOOKS },
            'books'
        ]
    });

    const [updateBook] = useMutation(UPDATE_BOOK, {
        refetchQueries: [
            { query: GET_BOOKS },
            'books',
            { query: GET_BOOK, variables: { id } },
            'book'
        ]
    });

    const { data } = useQuery(GET_BOOK, { variables: { id } });
    const book = data?.book?.data;

    const handleChange = ({ target }) => setDataForm({ ...dataForm, [ target.name ]: target.value })

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!id) {
                await createBook({ variables: { title: dataForm.title, description: dataForm.description } })
            } else {
                await updateBook({ variables: { id, title: dataForm.title, description: dataForm.description } })
            }
            navigate('/books')
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        if (id && book) {
            setDataForm({
                title: book.title,
                description: book.description
            })
        }
    }, [id, book])

    return (
        <CenteredContainer>
            <form className={classes.card} onSubmit={handleSubmit}>
                <h1 className={classes.title}>Add Book</h1>

                <div className={classes.cardBody}>
                    <InputText
                        name='title'
                        placeholder='Title'
                        handleChange={handleChange}
                        value={dataForm.title}
                    />

                    <InputTextArea
                        name='description'
                        placeholder='Description'
                        handleChange={handleChange}
                        value={dataForm.description}
                    />

                    <Button
                        type='submit'
                        label='Save'
                    />
                </div>

            </form>
        </CenteredContainer>
    );
};

export default BookForm;
