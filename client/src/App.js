import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddAuthor from './components/AddAuthor';


const client = new ApolloClient({
  uri: 'https://book-graphql-server.herokuapp.com/graphql',
});

class App extends Component {
  render(){
    return (
        <ApolloProvider client={ client }>
            <div id="name">
                <h1>Books 4 You</h1>
                <i>Powered by GraphQL, Node.js, MongoDB-Atlas & ReactJS</i>
                <h4>Books in the Database</h4>
                <BookList></BookList>
                <br></br>
                <AddBook></AddBook>
                <h4>Authors in the Database</h4>
                <br></br>
                <AddAuthor></AddAuthor>
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
