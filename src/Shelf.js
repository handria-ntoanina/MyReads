import React, {Component} from 'react';
import BookCard from './book/BookCard';
import PropTypes from 'prop-types';

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }
  render() {
    return (<div className='shelf'>
      <h2 className="title2">{this.props.title}</h2>
      <div className="book-container">
        {this.props.books.map(book => (<BookCard book={book} key={book.id} updateBook={this.props.updateBook}/>))}
        {!this.props.books.length  && (<p>There are no books under this category</p>)}
      </div>
    </div>)
  }
}

export default Shelf;
