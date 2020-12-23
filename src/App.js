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
  componentDidMount() {
    this.setState({
      books: localStorage.getItem("books")
        ? localStorage.getItem("books")
        : []
    })
  }

  render() {
    return (<div className="root">
      <Route exact path='/' render={() => (
          <Main books={this.state.books}/>
        )}/>
      <Route path='/search' component={SearchPage}/>
    </div>)
  }
}

export default BooksApp;
