import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SHELVES} from '../ShelfData';

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
      {SHELVES.map(SHELF => showStatus && shelf === SHELF.id && (<p key={'p' + book.id + SHELF.id}>{SHELF.message}</p>))}

      <div className="book-shelf-changer">
        <br/>Move to ...
        <br/> {SHELVES.map(SHELF => shelf !== SHELF.id && (<a key={'a' + book.id + SHELF.id} href="/" onClick={this.onChange} data-shelf={SHELF.id}>{SHELF.title}</a>))}
        {shelf && (<a href="/" onClick={this.onChange} data-shelf='none'>None</a>)}
      </div>
    </div>)
  }
}
export default BookCard;
