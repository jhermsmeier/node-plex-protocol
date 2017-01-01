var Plex = require( './plex' )
var debug = require( 'debug' )( 'plex:client' )
var request = require( 'request' )
var async = require( 'async' )
var parseXML = require( 'xml-parser' )
var pkg = require( '../package.json' )
var rebuild = require( './rebuild' )

/**
 * Client
 * @param {Object} options
 * @return {Client}
 */
function Client( options ) {

  if( !(this instanceof Client) )
    return new Client( options )

  options = Object.assign( {}, Client.defaults, options )

  debug( 'new', options )

  this._request = request.defaults({
    gzip: true,
    forever: true,
    baseUrl: options.url,
    headers: {
      'User-Agent': options.userAgent,
    },
  })

}

/**
 * Default options
 * @type {Object}
 */
Client.defaults = {
  url: 'https://plex.tv',
  userAgent: pkg.name + '/' + pkg.version + ' ' +
    '(' + process.release.name + '/' + process.versions.node + ')',
}

/**
 * Client prototype
 * @type {Object}
 */
Client.prototype = {

  constructor: Client,

  _clientRequest: function( options, callback ) {

    this._request( options, function( error, response, body ) {

      debug( 'HTTP %s %s', response.request.method, response.request.uri.path )
      debug( 'HTTP %s %s', response.statusCode, response.statusMessage, response.headers )

      if( error ) return callback( error, body )

      if( response.statusCode >= 400 ) {
        error = new Error( response.statusCode + ' ' + response.statusMessage )
        return callback( error, body )
      }

      var data = null

      if( !error ) {
        try {
          data = parseXML( body )
          data = rebuild( data.root )
        }
        catch( e ) { error = e }
      }

      callback( error, data || body )

    })

  },

  getInfo: function( callback ) {
    this._clientRequest({ url: '/' }, function( error, data ) {
      if( error ) return callback( error, data )
      var info = Plex.parseInfo( data )
      callback( error, info )
    })
  },

  get: function( url, callback ) {
    this._clientRequest({ url }, callback )
  },

  identity: function( callback ) {
    this._clientRequest({ url: '/identity' }, callback )
  },

  search: function( options, callback ) {
    this._clientRequest({
      url: '/search',
      qs: options
    }, callback )
  },

}

// Exports
module.exports = Client
