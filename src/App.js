import React, {Component} from 'react';
import Main from './Main';
import SearchPage from './search/SearchPage';
import {Route} from 'react-router-dom';
import * as BooksAPI from './book/BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  getShelf = (bookToSearch) => {
    let filtered = this.state.books.filter(book => book.id === bookToSearch.id);
    return filtered.length
      ? filtered[0].shelf
      : null;
  }

  updateBook = (bookToUpdate, shelf) => {
    BooksAPI.update(bookToUpdate, shelf).then(res => this.reloadBooks());
  }

  reloadBooks() {
    BooksAPI.getAll().then(books => this.setState({books: books}));
  }

  componentDidMount() {
    this.reloadBooks();
  }

  render() {
    return (<div className="root">
      <Route exact path='/'>
        <Main books={this.state.books} updateBook={this.updateBook} getShelf={this.getShelf}/>
      </Route>
      <Route path='/search'>
        <SearchPage updateBook={this.updateBook} getShelf={this.getShelf}/>
      </Route>
    </div>)
  }
}

export default BooksApp;
