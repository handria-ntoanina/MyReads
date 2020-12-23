import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
  }
  render() {
    const book = this.props.book;
    return (<div className="book">
      <img src={book.imageLinks.thumbnail} alt={book.title}/>
      <div className="book-shelf-changer"/>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
    </div>)
  }
}
export default BookCard;
