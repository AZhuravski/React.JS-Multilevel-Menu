require('./index.js');

var DossiersList = require('./DossiersList');

var React = require('react');

//var DOSSIERS = require('../json/dossiers.json');

var PREVIOUSDOSSIERS = require('../json/previousdossiers.json');

var PopupLink = React.createClass({
  
  handleUserInput: function( activeapp ) {
    this.props.onUserInput( activeapp );
  },
  
  handleUserInputTwo: function() {
    this.props.onUserInputTwo(
      this.props.popuplink.name
    );
  },
  
  render: function() {
    
    var popuplinkClass = ( this.props.popuplink.name == this.props.activepopuplink)? 'popuplink-active' : 'popuplink';
    //var popuplinkClass = 'popuplink';
    
    var currentDossiers = null;
    
    if ( this.props.popuplink.name == this.props.activepopuplink) {
      var dossiersList = ( this.props.activepopuplink == 'Currently open dossiers')? 
                          <DossiersList  dossiers = {DOSSIERS}         
                                         activepopuplink = {this.props.activepopuplink}
                                         onUserInput={this.handleUserInput}/> : 
                         ( this.props.activepopuplink == 'Previously viewed')?
                          <DossiersList  dossiers = {PREVIOUSDOSSIERS}
                                         activepopuplink = {this.props.activepopuplink} 
                                         onUserInput={this.handleUserInput}/> : null;
    }  
    
    return (
      <div className = {popuplinkClass} onClick={this.handleUserInputTwo}>
        <table>
          <tr>
            <td className = "linkname">{this.props.popuplink.name}</td>
            <td>►</td>
          </tr>
        </table>
        {dossiersList}
      </div>
    );
  }
});

module.exports = PopupLink;