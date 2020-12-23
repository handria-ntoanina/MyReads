import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookCard extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired,
    showNone: PropTypes.bool,
    showStatus: PropTypes.bool
  }

  static defaultProps = {
    showNone: true,
    showStatus: false
  }

  onChange = (event) => {
    event.preventDefault();
    const shelf = event.target.dataset.shelf;
    const {book, updateBook} = this.props;
    updateBook(book, shelf);
  }

  render() {
    const book = this.props.book;
    const showStatus = this.props.showStatus;
    const shelf = this.props.getShelf(book);
    return (<div className="book">
      <img src={book.imageLinks && book.imageLinks.thumbnail} alt={book.title}/>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        {showStatus && shelf === 'currentlyReading' && (<p>You are currently reading this book</p>)}
        {showStatus && shelf === 'wantToRead' && (<p>You want to read this book</p>)}
        {showStatus && shelf === 'read' && (<p>You have read this book</p>)}
      <div className="book-shelf-changer">
        <br/>Move to ...
        <br/> {shelf !== 'wantToRead' && (<a href="/" onClick={this.onChange} data-shelf='wantToRead'>Want to Read</a>)}
        {shelf !== 'read' && (<a href="/" onClick={this.onChange} data-shelf='read'>Read</a>)}
        {shelf !== 'currentlyReading' && (<a href="/" onClick={this.onChange} data-shelf='currentlyReading'>Currently Reading</a>)}
        {shelf !== 'none' && (<a href="/" onClick={this.onChange} data-shelf='none'>None</a>)}
      </div>
    </div>)
  }
}
export default BookCard;
