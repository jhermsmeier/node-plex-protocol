function bool( value ) {
  return value === '1'
}

function toFloat( value ) {
  return +value
}

function isDirectory( node ) {
  return node._element === 'Directory'
}

function reduceDirectories( ls, dir ) {
  ls[ dir.key ] = { count: toFloat( dir.count ), title: dir.title }
  return ls
}

function parseInfo( data ) {

  var info = {}

  info.identity = {
    machineIdentifier: data.machineIdentifier,
    version: data.version,
  }

  info.friendlyName = data.friendlyName
  info.features = data.ownerFeatures &&
    data.ownerFeatures.split( ',' )

  info.myPlex = {
    enabled: bool( data.myPlex ),
    mappingState: data.myPlexMappingState,
    signinState: data.myPlexSigninState,
    subscription: bool( data.myPlexSubscription ),
    username: data.myPlexUsername,
  }

  info.allowCameraUpload = bool( data.allowCameraUpload )
  info.allowChannelAccess = bool( data.allowChannelAccess )
  info.allowSharing = bool( data.allowSharing )
  info.allowSync = bool( data.allowSync )
  info.backgroundProcessing = bool( data.backgroundProcessing )
  info.certificate = bool( data.certificate )
  info.companionProxy = bool( data.companionProxy )
  info.eventStream = bool( data.eventStream )
  info.hubSearch = bool( data.hubSearch )
  info.multiuser = bool( data.multiuser )
  info.pluginHost = bool( data.pluginHost )
  info.readOnlyLibraries = bool( data.readOnlyLibraries )
  info.requestParametersInCookie = bool( data.requestParametersInCookie )
  info.sync = bool( data.sync )
  info.updater = bool( data.updater )

  info.transcoder = {
    audio: bool( data.transcoderAudio ),
    lyrics: bool( data.transcoderLyrics ),
    photo: bool( data.transcoderPhoto ),
    subtitles: bool( data.transcoderSubtitles ),
    video: bool( data.transcoderVideo ),
    videoBitrates: data.transcoderVideoBitrates &&
      data.transcoderVideoBitrates.split( ',' ).map( toFloat ),
    videoQualities: data.transcoderVideoQualities &&
      data.transcoderVideoQualities.split( ',' ).map( toFloat ),
    videoResolutions: data.transcoderVideoResolutions &&
      data.transcoderVideoResolutions.split( ',' ).map( toFloat ),
  }

  info.directories = data.directories
    .filter( isDirectory )
    .reduce( reduceDirectories, {})

  return info

}

module.exports = parseInfo
