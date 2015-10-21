var React = require('react');

var SearchBar = React.createClass({
  
  handleChange: function() {
    this.props.onUserInput(
      "Searchbar"
    );
  },
  
  render: function() {
    
    var searchbarClass = ( 'Searchbar' == this.props.activeapp)? 'searchbar-active' : 'searchbar';
    
    return (
      <div className = {searchbarClass} onClick={this.handleChange}>
        <form>
          <input type="text" className = "searchform" placeholder="  Enter a dossier number ..." />
        </form>
      </div>
    );
  }
});

module.exports = SearchBar;