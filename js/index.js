require('../sass/helloworld.scss');

var React = require('react');

var GlobalMenuButton = require('./GlobalMenuButton');

window.DOSSIERS = require('../json/dossiers.json');

      
React.render(<GlobalMenuButton />, document.getElementsByTagName('body')[0]); 