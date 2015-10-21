var React = require('react');

var App = React.createClass({
  
  handleChange: function() {
    this.props.onUserInput(
      this.props.application.name
    );
  },
  
  render: function() {
    
    var appIconClass = 'app-icon-' + this.props.application.shortName.toLowerCase();
    
    var appCirClass = this.props.application.number1? 'app-cir' : 'app-cir-hidden';
    
    var appAmountClass = ( this.props.application.number2 === undefined )? 'app-amount-hidden' : 'app-amount';
    
    var appClass = ( this.props.application.name == this.props.activeapp)? 'app-active' : 'app';
    
    return (
      <div className = {appClass} onClick={this.handleChange}>
        <table>
          <tr>
              <td className = {appIconClass}>{this.props.application.shortName}</td>
              <td className = "app-name">{this.props.application.name}</td>
              <td><div className = {appCirClass}>{this.props.application.number1}</div></td>
              <td className = {appAmountClass}><span className = 'bold'>{this.props.application.number2}</span>&nbsp;/&nbsp;{this.props.application.number3}</td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = App;