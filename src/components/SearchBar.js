import React, { Component } from 'react';
import '../css/SearchBar.css';

export class SearchBar extends Component {
    render() {
        return (
            <div className="col-9">
                <img src="https://via.placeholder.com/60" />
                <input type="text" placeholder="Search..." />
            </div>
            
        )
    }
}

export default SearchBar
