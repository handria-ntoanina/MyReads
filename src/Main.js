import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (<div>
      <div class='top-bar'>
        <h1 class='title'>My Reads</h1>
      </div>
      Main
      <div className="open-search">
        <Link className='link' to="/search">Add</Link>
      </div>
    </div>)
  }
}

export default Main;
