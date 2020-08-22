import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books{
            name,
            id
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(
            name : $name, 
            genre: $genre,
            authorId: $authorId
        ){
            name,
            id
        }
    }
`;

const addAuthorMutation = gql`
    mutation($name: String!, $age: Int!) {
        addAuthor(
            name : $name, 
            age: $age,
        ){
            name,
            age
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

const getAuthorQuery = gql`
    query GetAuthor($id: ID){
        author(id: $id) {
            name
            age
            books {
                name
                genre
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery, addAuthorMutation, getAuthorQuery };