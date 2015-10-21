var React = require('react');

var SettingsBar = React.createClass({
  
  handleChange: function() {
    this.props.onUserInput(
      "Settings"
    );
  },
  
  render: function() {
    
    var settingsbarClass = ( 'Settings' == this.props.activeapp)? 'settingsbar-active' : 'settingsbar';
    
    return (
      <div className = {settingsbarClass} onClick={this.handleChange}>
        Settings
      </div>
    );
  }
});

module.exports = SettingsBar;