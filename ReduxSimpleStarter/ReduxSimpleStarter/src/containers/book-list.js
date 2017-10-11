import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class Booklist extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={ () => this.props.selectBook(book) }
                    key={book.title}
                    className="list-group-item" >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// Anything return will end up as props as BookList container
function mapDispatchToProps(dispatch) {
    // whenever select is called , the result should be passed to 
    // all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container - 
// it needs to know about this new dispatch, selectBook, make it availble as prop
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);