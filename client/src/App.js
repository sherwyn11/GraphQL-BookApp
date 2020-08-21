import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
});

class App extends Component {
  render(){
    return (
        <ApolloProvider client={ client }>
            <div id="name">
                <h1>Books</h1>
                <BookList></BookList>
                <br></br>
                <AddBook></AddBook>
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
