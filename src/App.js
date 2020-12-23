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
      let book = filtered
        ? filtered[0]
        : bookToUpdate;

      // if the book was not found / filtered is empty, then add that book to the list known by our state
      if (!filtered) {
        prev.books.push(bookToUpdate);
      }

      // if the shelf is null then remove that book from our component
      if (shelf === null)
        prev.books.pop(book)
      else
        book.shelf = shelf;

      // save our books in the localStorage of our browser so that it can be retrieved later after refreshing
      localStorage.setItem("books", prev.books);
      return {books: prev.books}
    })
  }

  componentDidMount() {
    this.setState({
      books: localStorage.getItem("books")
        ? localStorage.getItem("books")
        : []
    })
  }

  render() {
    return (<div className="root">
      <Route exact path='/' render={() => (<Main books={this.state.books} updateBook={this.updateBook}/>)}/>
      <Route path='/search' render={() => (<SearchPage updateBook={this.updateBook}/>)}/>
    </div>)
  }
}

export default BooksApp;
