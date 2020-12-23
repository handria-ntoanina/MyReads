import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
    showNone: PropTypes.bool
  }

  static defaultProps = {
    showNone: true
  }

  onChange = (event) => {
    event.preventDefault();
    const value = event.target.dataset.shelf;
    const shelf = value === 'none'
      ? null
      : value;
    const {book, updateBook} = this.props;
    updateBook(book, shelf);
  }

  render() {
    const book = this.props.book;
    return (<div className="book">
      <img src={book.imageLinks.thumbnail} alt={book.title}/>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      <div className="book-shelf-changer">
        <br/>Move to ...
        <br/>
        <a href="/" onClick={this.onChange} data-shelf='want'>Want to Read</a>
        | 
        <a href="/" onClick={this.onChange} data-shelf='read'>Read</a>
        <br/>
        <a href="/" onClick={this.onChange} data-shelf='current'>Currently Reading</a>
        | {this.props.showNone && (<a href="/" onClick={this.onChange} data-shelf='none'>None</a>)}
      </div>
    </div>)
  }
}
export default BookCard;
