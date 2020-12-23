import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../book/BooksAPI';
import BookCard from '../book/BookCard';
import PropTypes from 'prop-types';

class SearchPage extends Component {
  state = {
    criteria: '',
    result: []
  }

  static propTypes = {
    updateBook: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
  }

  updateCriteria = (criteria) => {
    this.setState({criteria: criteria})
    if (this.state.criteria.trim() === '')
      return;
    BooksAPI.search(criteria).then((books) => {
      /*When the input is fast-earased by the user, setting an empty result will come before
        the promise is done. Thus, the result of a previous query will be rendered after erasing the current result
        */
      if (this.state.criteria.trim() === '' || !books || books.error) {
        this.setState({result: []});
        return;
      }
      this.setState({result: books});
    });
  }

  render() {
    /* authors[],id, imageLinks.thumbnail, title */
    return (<div>
      <div className='search-books-bar'>
        <Link to="/" className="close-search">Close</Link>
        {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
        }
        <input className="search-books-input" type="text" placeholder="Search by title or author" value={this.state.criteria} onChange={(event) => this.updateCriteria(event.target.value)}/>
      </div>
      <div className="search-books-results">
        <h2 className="title2">Search Result</h2>
        <div className="book-container">
          {this.state.result.map(book => (<BookCard book={book} key={book.id} updateBook={this.props.updateBook} showNone={false} getShelf={this.props.getShelf} showStatus={true}/>))}
          {!this.state.result.length && this.state.criteria.trim() && (<p>There are no books matching the criteria {this.state.criteria}</p>)}
          {!this.state.result.length && !this.state.criteria.trim() && (<p>Start by entering a search criteria</p>)}
        </div>
      </div>
    </div>)
  }
}

export default SearchPage;
