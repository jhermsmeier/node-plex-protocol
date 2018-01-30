var Plex = require( './plex' )
var debug = require( 'debug' )( 'plex:client' )
var http = require( 'simple-get' )
var HTTPAgent = require( 'http' ).Agent
var HTTPSAgent = require( 'https' ).Agent
var qs = require( 'querystring' )
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

  this.baseUrl = options.url || 'http://localhost:32400'
  this.userAgent = options.userAgent
  this.httpAgent = new HTTPAgent({
    keepAlive: true,
    maxSockets: 10,
  })
  this.httpsAgent = new HTTPSAgent({
    keepAlive: true,
    maxSockets: 10,
  })

  this.requestOptions = Object.assign({
    timeout: 10000,
    rejectUnauthorized: true,
    agent: this.httpAgent,
  }, options.request )

  debug( 'new', options )

}

/**
 * Default options
 * @type {Object}
 */
Client.defaults = {
  url: null,
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

    options = Object.assign( {}, this.requestOptions, options )
    options.url = this.baseUrl + options.url
    options.headers = options.headers || {}
    options.headers['User-Agent'] = this.userAgent
    options.headers['Connection'] = 'Keep-Alive'

    if( options.query ) {
      options.url += '?' + qs.stringify( options.query )
    }

    if( /^https:/i.test( options.url ) ) {
      options.agent = this.httpsAgent
    }

    var request = http.concat( options, function( error, response, body ) {

      if( error ) return callback( error, body )

      debug( 'HTTP %s %s', request.method, options.url )
      debug( 'HTTP %s %s', response.statusCode, response.statusMessage, response.headers )

      if( response.statusCode >= 400 ) {
        error = new Error( response.statusCode + ' ' + response.statusMessage )
        return callback( error, body )
      }

      var data = null
      var contentType = response.headers['content-type']

      try {
        if( /^application\/json/.test( contentType ) ) {
          data = JSON.parse( body.toString() )
        }
        if( /^text\/xml/.test( contentType ) ) {
          data = parseXML( body.toString() )
          data = rebuild( data.root )
        }
      } catch( e ) {
        error = e
      }

      callback( error, data || body, response.headers )

    })

    request.once( 'socket', ( socket ) => {
      socket.setTimeout( options.timeout )
    })

  },

  getInfo( options, callback ) {

    if( typeof options === 'function' ) {
      callback = options
      options = null
    }

    options = options ? Object.assign({}, options) : {}
    options.url = '/'

    this._clientRequest( options, function( error, data ) {
      if( error ) return callback( error, data )
      var info = null
      try {
        info = Plex.parseInfo( data )
      } catch( e ) {
        error = e
      }
      callback( error, info )
    })

  },

  get( url, callback ) {
    this._clientRequest({ url }, callback )
  },

  identity( callback ) {
    this._clientRequest({ url: '/identity' }, callback )
  },

  account( callback ) {
    this._clientRequest({ url: '/myplex/account' }, callback )
  },

  sessions( callback ) {
    this._clientRequest({ url: '/status/sessions' }, callback )
  },

  preferences( callback ) {
    this._clientRequest({ url: '/:/prefs' }, callback )
  },

  systemPreferences( callback ) {
    this._clientRequest({ url: '/system/:/prefs' }, callback )
  },

  servers( callback ) {
    this._clientRequest({ url: '/servers' }, callback )
  },

  clients( callback ) {
    this._clientRequest({ url: '/clients' }, callback )
  },

  search( options, callback ) {
    this._clientRequest({
      url: '/search',
      query: options
    }, callback )
  },

}

// Exports
module.exports = Client
