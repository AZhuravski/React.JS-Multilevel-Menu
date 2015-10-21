var GlobalMenu = require('./GlobalMenu');

var React = require('react');

var APPLICATIONS = require('../json/applications.json');

var POPUPLINKS = require('../json/popuplinks.json');

var GlobalMenuButton = React.createClass({
  
  getInitialState: function() {
    return {
      active: false,
      activeapp: 'Home Dashboard'
    };
  },
  
  toggleActive: function() {
    this.setState({
      active: !this.state.active
    });    
  },
  
  handleUserInput: function(activeapp) {
    this.setState({
      activeapp: activeapp
    });
  },
  
  render: function() {
 
    document.body.onclick = function (event) {

      var target = event.target;  
      if ((target.id == 'divdiv') && (this.state.active)) {
        this.toggleActive();
      }
    }.bind(this);
    
    return (
      <div id='divdiv'> 
        <div onClick={this.toggleActive} className="globalmenu-icon"></div>  
        <div className="globalmenu-selected"><b>{this.state.activeapp}</b></div>
        <GlobalMenu applications={APPLICATIONS} popuplinks={POPUPLINKS} activeapp={this.state.activeapp} globalmenubutton={this.state.active} onUserInput={this.handleUserInput} toggle={this.toggleActive}/>
      </div>
    );
  }
  
});

module.exports = GlobalMenuButton;