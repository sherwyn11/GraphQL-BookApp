import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';   
import { getAuthorsQuery, addBookMutation, getBooksQuery, addAuthorMutation } from '../utils/queries';
import AuthorDetails from './AuthorDetails';


class AddAuthor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: null,
            selected: null,
        }
    }
    
    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        if(data.loading){
            return( <option disabled>Loading authors...</option> );
        } else {
            return data.authors.map(author => {
                return( <li key={ author.id } value={author.id} onClick={ (e) => this.setState({ selected: author.id }) }>{ author.name }</li> );
            });
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addAuthorMutation({
            variables: {
                name: this.state.name,
                age: this.state.age,
            },
            refetchQueries: [{
                query: getAuthorsQuery
            }]
        });
    }

    render(){
        return(
            <div>
                { this.displayAuthors() }
                <h3>Add Author</h3>
                <br></br>
                <form id="add-author" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label>Author name:</label>
                        <input type="text" onChange={(e) => this.setState({ name: e.target.value })}/>
                    </div>
                    <br></br>
                    <div className="field">
                        <label>Age:</label>
                        <input type="text" onChange={(e) => this.setState({ age: Number(e.target.value) })}/>
                    </div>
                    <br></br>
        
                    <button>Add Author</button>

                </form>

                <AuthorDetails authorId={ this.state.selected }></AuthorDetails>


            </div>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(AddAuthor);