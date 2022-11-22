// Utilizing jquery
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


$(document).ready(function() {
  // --- our code goes here ---
});