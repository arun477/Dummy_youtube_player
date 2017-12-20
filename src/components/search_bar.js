import React, {Component} from 'react';



class SearchBar extends Component {

    constructor(props) {
      super(props);

      this.state = {
        term: ''
      }
    }

     render() {
       return (
         <div className="search-bar col-sm-12">
          <input
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)}
          /> <i class="icon-search"></i> 

          </div>
       );
     }

     onInputChange(term){
       this.setState({term});
       this.props.onSearchTermChange(term);
     }

}

export default SearchBar;
