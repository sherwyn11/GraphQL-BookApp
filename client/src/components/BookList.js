import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../utils/queries';
import BookDetails from './BookDetails';


class BookList extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks() {
        var data = this.props.data;
        if(!data.loading){
            return data.books.map(book => {
                return(
                    <li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }> { book.name } </li>
                );
            });
        }else{
             return(
                <div>
                    Loading Books...
                </div>
            );
        }
    }


    render() {
        return (
            <ul id="book-list">
                { this.displayBooks() }
                <br></br>
                <BookDetails bookId={ this.state.selected }></BookDetails>
            </ul>
        )
    }
}

export default graphql(getBooksQuery)(BookList);