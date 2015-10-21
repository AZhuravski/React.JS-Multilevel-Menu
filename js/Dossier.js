var React = require('react');

var Dossier = React.createClass({
  
  handleUserInputs: function( event ) {
    var target = event.target;
    if ( target.id == 'dossier-close-button') {
      this.props.onCloseButton( this.props.dossier.name );
    } else {
      this.props.onUserInput( 'Workmanager' );
    }    
  },
  
  /*handleUserInput: function() {
    this.props.onUserInput( 'Workmanager' );
  },
  
  handleCloseButton: function() { 
    this.props.onCloseButton( this.props.dossier.name );
  },*/
  
  render: function() {
  
    var dosClass = 'dos';
    
    var dosIconClose = ( this.props.activepopuplink == 'Previously viewed' )? 'dos-icon-close-hidden' : 'dos-icon-close' ;
    
    return (
      <div className = {dosClass} onClick={this.handleUserInputs} >
        <div className = "dos-icon"></div>
        <div className = "dos-section">
          <table className = "dos-table">
            <tr>
              <td><a className = 'dos-name-a' href = "#">{this.props.dossier.name}</a></td>
              <td rowSpan = "2" className = {dosIconClose} id='dossier-close-button'>X</td>
            </tr>
            <tr>
              <td className = "dossier-company">{this.props.dossier.company}</td>
            </tr>
          </table> 
          <table className = "dos-table">
            <tr>
              <td colSpan="2" className = "dos-specialist">{this.props.dossier.specialist}</td>
            </tr>
            <tr>
              <td className = "dos-number">{this.props.dossier.number}</td>  
              <td className = "dos-date">Lim.Date {this.props.dossier.date}</td>
            </tr>
          </table>
        </div>
      </div>      
    );
    
  }
});

module.exports = Dossier;