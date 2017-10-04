var util = require( 'util' )
var Plex = require( '..' )
var debug = require( 'debug' )( 'plex:test' )
var argv = process.argv.slice(2)

const HOST = argv.shift() || '127.0.0.1'

function inspect( value ) {
  return util.inspect( value, {
    depth: null,
    colors: true,
  })
}

function show( callback ) {
  return function( error, data ) {
    console.error( inspect( error || data ) )
    // console.log( JSON.stringify( data, null, 2 ) )
    callback && callback( error, data )
  }
}

var client = new Plex.Client({
  // url: 'http://127.0.0.1:32400/',
  url: `http://${HOST}:32400`,
})

// client.getInfo( function( error, info ) {
//   console.log( '[INFO]', inspect( error || info ) )
// })

// DANGER! This actually installs the VICE app
// client.get( '/system/appstore/apps/com.plexapp.plugins.vice/install', show() )

// client.get( '/:/plugins/com.plexapp.system/resourceHashes', show() )
// client.get( '/:/plugins/com.plexapp.system/serviceTestURLs', show() )
// client.get( '/library/metadata/20703/children?year>=2014&X-Plex-Container-Start=0&X-Plex-Container-Size=20', show() )
// client.get( '/system/:/prefs', show() )
// client.get( '/clients', show() )
// client.get( '/library/recentlyAdded', show() )
// client.get( '/:/timeline', show() ) // Bad Request (?)
// client.get( '/myplex/account', show() )
// client.get( '/system/appstore/history', show() )
// client.get( '/library/sections/6/all', show() )
// client.get( '/library/sections/2/all', show() )
// client.get( '/library/sections/1/all', show() )
// client.get( '/library/metadata/139/children', show() )
client.get( '/library/parts/145/1499608413/file.mp3', show() )

// client.get( '/search?query=Homer', function( error, data ) {
//   console.log( inspect( error || data ) )
// })

// client.search({
//   query: 'Homer',
//   year: '2016',
// }, function( error, data ) {
//   console.log( inspect( error || data ) )
// })

// client.identity( function( error, data ) {
//   console.log( '[IDENTITY]', inspect( error || data ) )
// })
