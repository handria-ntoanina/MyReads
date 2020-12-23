import React, {Component} from 'react';
import Main from './Main';
import SearchPage from './search/SearchPage';
import {Route} from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  updateBook = (bookToUpdate, shelf) => {
    this.setState((prev) => {
      // Search for the book to be updated within the state
      let filtered = prev.books.filter(book => book.id === bookToUpdate.id);
      let book = filtered.length
        ? filtered[0]
        : bookToUpdate;

      // if the book was not found / filtered is empty, then add that book to the list known by our state
      if (!filtered.length) {
        prev.books.push(bookToUpdate);
      }

      book.shelf = shelf;
      // if the shelf is null then remove that book from our component
      prev.books = prev.books.filter(book => book.shelf !== null)

      // save our books in the localStorage of our browser so that it can be retrieved later after refreshing
      this.storeBooks(prev.books);
      return {books: prev.books}
    })
  }

  storeBooks = (books) => {
    const prepared = this.state.books.map(book => {
      let o = Object();
      o.imageLinks = Object();
      o.imageLinks.thumbnail = book.imageLinks.thumbnail;
      o.title = book.title;
      o.authors = book.authors;
      o.shelf = book.shelf;
      o.id = book.id;
      return o;
    });
    localStorage.setItem("books", JSON.stringify(prepared));
  }

  componentDidMount() {
    const books = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];
    this.setState({books: books})
  }

  render() {
    return (<div className="root">
      <Route exact path='/' render={() => (<Main books={this.state.books} updateBook={this.updateBook}/>)}/>
      <Route path='/search' render={() => (<SearchPage updateBook={this.updateBook}/>)}/>
    </div>)
  }
}

export default BooksApp;
