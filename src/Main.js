import React, {Component} from 'react';
import Shelf from './Shelf'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Main extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
  }

  render() {
    return (<div className="root">
      <div className='top-bar'>
        <h1 className='title'>My Reads</h1>
      </div>
      <Shelf title="Currently Reading" books={this.props.books.filter(book => book.shelf && book.shelf === 'current')} updateBook={this.props.updateBook} getShelf={this.props.getShelf}/>
      <Shelf title="Want to Read" books={this.props.books.filter(book => book.shelf && book.shelf === 'want')} updateBook={this.props.updateBook} getShelf={this.props.getShelf}/>
      <Shelf title="Read" books={this.props.books.filter(book => book.shelf && book.shelf === 'read')} updateBook={this.props.updateBook} getShelf={this.props.getShelf}/>
      <div className="open-search">
        <Link className='link' to="/search">Add</Link>
      </div>
    </div>)
  }
}

export default Main;
