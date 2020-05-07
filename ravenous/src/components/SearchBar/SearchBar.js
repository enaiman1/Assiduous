import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      term: '' ,
      location: '',
      sortBy: 'best_match',

    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }
  }
  // this method will display what option the user selected (sorted from the sortByOptions object)
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption]
      return <li 
      className={this.getSortByClass(sortByOptionValue)} 
      key={sortByOptionValue}
      onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
      >
        {sortByOption}
        </li>
    });
  }

  // this method will return the css to highlight the sorted option the user picked
  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active'
    } else {
      return ''
    }
  }

  // this method handles the state change when the user picks an option
  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption})
  }

  // this method handles the changes when the user inputs values to the "search by business" search bar
  handleTermChange(event){
    this.setState({term: event.target.value})
  }
// this method handles the changes when the user inputs values to the "search by location" search bar
  handleLocationChange(event){
    this.setState({location: event.target.location})
  }


  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a href="www.#.com">Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;