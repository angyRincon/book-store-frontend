import classes from './styles.module.scss';
import CenteredContainer from "../../HOC/centered-container";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { DELETE_BOOK, GET_BOOKS } from "../../../services/books";
import { useNavigate } from "react-router-dom";
import IconButton from "../../atoms/icon-button";

const BookList = () => {
    const navigate = useNavigate();

    const { data } = useQuery(GET_BOOKS)
    const books = data?.books?.data

    const [deleteBook] = useMutation(DELETE_BOOK, {
        refetchQueries: [
            { query: GET_BOOKS },
            'books'
        ]
    });

    const handleCreateBook = (id) => navigate(`/add-book`);
    const handleNavigate = (id) => navigate(`/book/${id}`);
    const handleEdit = (id) => navigate(`/edit-book/${id}`);

    const handleDelete = async (id) => {
        await deleteBook({ variables: { id } })
        navigate('/books');
    };

    return (
        <CenteredContainer>
                <div className={classes.addButton}>
                    <IconButton
                        icon='fa-solid fa-plus'
                        handleClick={handleCreateBook}
                    />
                </div>
            <ul className={classes.containerList}>
                {
                    books && books.map(({ id, title, description }) => (
                        <li
                            key={id}
                            className={classes.listItem}
                            onClick={() => handleNavigate(id)}
                        >
                            <div>
                                <h4 className={classes.title}>{title}</h4>
                                <p>{description}</p>
                            </div>

                            <div className={classes.actions}>
                                <IconButton
                                    icon='fa-solid fa-pen'
                                    color='info'
                                    handleClick={() => handleEdit(id)}
                                />

                                <IconButton
                                    icon='fa-solid fa-trash'
                                    color='error'
                                    handleClick={() => handleDelete(id)}
                                />

                            </div>
                        </li>
                    ))
                }
            </ul>
        </CenteredContainer>
    );
};

export default BookList;
