var React = require('react');

var Dossier = require('./Dossier');

var DossiersList = React.createClass({
  
  handleUserInput: function( activeapp ) {
    this.props.onUserInput( activeapp );
  },
  
  handleCloseButton: function( dossier ) {
    this.props.dossiers = this.props.dossiers.filter(function(dos) {
      return !(dos.name == dossier);
    });
    DOSSIERS = this.props.dossiers;
  },
  
  handleCloseAll: function() {
    DOSSIERS = [];
  },
  
  render: function() {
    
    var dosrows = [];
    var closeAll = '';
    var nothingToShow = '';
    
    if ( this.props.activepopuplink == 'Currently open dossiers' ) {
      
      closeAll = ( this.props.dossiers.length )? <div className = "dos-closeall" onClick={this.handleCloseAll} >Close all</div> : '';
      
      nothingToShow = ( !this.props.dossiers.length )? <div className = "dos-closeall" >Ooops! You killed them all.</div> : '';       
    }
    
    this.props.dossiers.forEach(function(dossier) {
      dosrows.push(<Dossier dossier={dossier}
                            activepopuplink={this.props.activepopuplink}
                            onUserInput={this.handleUserInput}
                            onCloseButton={this.handleCloseButton}/>);
    }.bind(this));

      return (
        <div className="dos-current-list">
          {dosrows}  
          {closeAll}
          {nothingToShow}
        </div>
      );

  }
});

module.exports = DossiersList;