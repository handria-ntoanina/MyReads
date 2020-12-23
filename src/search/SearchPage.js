import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchPage extends Component {
  render() {
    return (<div>
      <div class='search-books-bar'>
        <Link to="/" className="close-search">Close</Link>
        <input className="search-books-input" type="text" placeholder="Search by title or author"/>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}

        </div>
      </div>

      Search
    </div>)
  }
}

export default SearchPage;
