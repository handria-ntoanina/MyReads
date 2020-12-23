import React, { Component } from 'react';
import Main from './Main';
import SearchPage from './search/SearchPage';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {
  render() {
    return (
        <div>
          <Route exact path='/' component={Main}/>
          <Route path='/search' component={SearchPage}/>
        </div>
      )
  }
}

export default BooksApp;
