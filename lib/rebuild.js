var plural = require( 'pluralize' ).plural
var camelcase = require( 'camelcase' )

function rebuild( root, target ) {

  if( typeof root !== 'object' || Array.isArray( root ) )
    return root

  target = target || {}
  target._element = root.name

  Object.assign( target, root.attributes )

  root.children.forEach( ( child ) => {

    var key = camelcase( plural( child.name ) )
    var value = Object.assign({ _element: child.name }, child.attributes )

    if( child.children ) {
      value = rebuild( child, value )
    }

    target[ key ] = target[ key ] || []
    target[ key ].push( value )

  })

  return target

}

module.exports = rebuild
