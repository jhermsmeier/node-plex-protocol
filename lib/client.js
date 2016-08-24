var request = require( 'request' )
var async = require( 'async' )
var parseXML = require( 'xml-parser' )

/**
 * Client
 * @param {Object} options
 * @return {Client}
 */
function Client( options ) {

  if( !(this instanceof Client) )
    return new Client( options )

  this.options = Object.assign( {}, Client.defaults, options )
  this.request = request.defaults({
    gzip: true,
    forever: true,
  })

}

/**
 * Client prototype
 * @type {Object}
 */
Client.prototype = {

  constructor: Client,

  _clientRequest: function( options, callback ) {

    this.request( options, function( error, response, body ) {

      var data = null

      if( !error ) {
        try { data = parseXML( body ) }
        catch( e ) { error = e }
      }

      callback( error, data )

    })

  },

}

// Exports
module.exports = Client
