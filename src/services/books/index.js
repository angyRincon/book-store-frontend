import { gql } from "apollo-boost";

export const GET_BOOK = gql`
    query GetBook($id: ID!) {
        book(id: $id) {
            data {
                title
                description
            }
            status
            message
        }
    }
`

export const GET_BOOKS = gql`
    query {
        books {
            data {
                id
                title
                description
            }
            status
            message
        }
    }

`;

export const CREATE_BOOK = gql`
    mutation CreateBook($title: String!, $description: String!) {
        createBook(book: {title: $title, description: $description}) {
            data {
                title
                description
            }
            status
            message
        }
    }
`;

export const UPDATE_BOOK = gql`
    mutation UpdateBook($id: ID!, $title: String!, $description: String!) {
        updateBook(id: $id, book: {title: $title, description: $description}) {
            data {
                title
                description
            }
            message
            status
        }
    }
`

export const DELETE_BOOK = gql`
    mutation DeleteBook($id: ID!) {
        deleteBook(id: $id) {
            message
            status
        }
    }
`

