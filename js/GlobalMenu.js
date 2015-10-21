var App = require('./App');
var PopupLink = require('./PopupLink');
var SearchBar = require('./SearchBar');
var SettingsBar = require('./SettingsBar');
var React = require('react');

var GlobalMenu = React.createClass({
  
  getInitialState: function() {
    return {
      activepopuplink: ''
    };
  },
  
  handlePopupLinkInput: function(activepopuplink){
    this.setState({
      activepopuplink: activepopuplink
    });
  },
  
  handleUserInput: function(activeapp) {
    
    //set active application selection
    this.props.onUserInput(
      activeapp
    );
    
    //set active popuplink to zero
    this.setState({
      activepopuplink: ''
    });
    
    // collapse GlobalMenu after application or settings choice
    this.props.applications.forEach(function(application) {
       if ((activeapp == application.name ) || (activeapp == "Settings" ) ) {
         this.props.toggle();
       } 
    }.bind(this));
  },
  
  //collapse DossierList if user clicks on menu button
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      activepopuplink: ''
    });
  },
  
  render: function() {
        
    var globalmenuClass = (this.props.globalmenubutton)? "globalmenu" : "globalmenu-hidden";
        
    var approws = [];
    
    this.props.applications.forEach(function(application) {
      approws.push(<App application={application}
                        activeapp={this.props.activeapp}
                        onUserInput={this.handleUserInput} />);
    }.bind(this));
    
    var poprows = [];
      
    this.props.popuplinks.forEach(function(popuplink) {
      poprows.push(<PopupLink popuplink={popuplink} 
                              activeapp={this.props.activeapp}  
                              activepopuplink={this.state.activepopuplink}
                              onUserInput={this.handleUserInput}
                              onUserInputTwo={this.handlePopupLinkInput} />);
    }.bind(this));
    
    return (
      <div className={globalmenuClass} >
        {approws}  
        <div className = "whitespace"></div>
        {poprows}
        <SearchBar activeapp={this.props.activeapp} onUserInput={this.handleUserInput} />
        <SettingsBar activeapp={this.props.activeapp} onUserInput={this.handleUserInput}/>
      </div>
    );
  }
                                  
});

module.exports = GlobalMenu;