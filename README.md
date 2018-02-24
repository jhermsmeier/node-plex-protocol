# Plex Protocol
[![npm](https://img.shields.io/npm/v/plex-protocol.svg?style=flat-square)](https://npmjs.com/plex-protocol)
[![npm license](https://img.shields.io/npm/l/plex-protocol.svg?style=flat-square)](https://npmjs.com/plex-protocol)
[![npm downloads](https://img.shields.io/npm/dm/plex-protocol.svg?style=flat-square)](https://npmjs.com/plex-protocol)
[![build status](https://img.shields.io/travis/jhermsmeier/node-plex-protocol.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-plex-protocol)

Plex HTTP API protocol

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save plex-protocol
```

<!-- MarkdownTOC -->

- [Usage](#usage)
    - [Creating a Client](#creating-a-client)
    - [Identity](#identity)
    - [General Information](#general-information)
    - [Search](#search)
    - [Making requests](#making-requests)
    - [Getting account information](#getting-account-information)
    - [List clients](#list-clients)
    - [List sessions](#list-sessions)
    - [List servers](#list-servers)
    - [Get preferences](#get-preferences)
- [Examples](#examples)
    - [Remotely installing a plugin](#remotely-installing-a-plugin)

<!-- /MarkdownTOC -->

## Usage

```js
var Plex = require( 'plex-protocol' )
```

### Creating a Client

```js
var client = new Plex.Client({
  url: `http://127.0.0.1:32400/`,
})
```

### Identity

```js
client.identity( function( error, data ) {
  console.log( error || data )
})

```

```js
{
  _element: 'MediaContainer',
  size: '0',
  machineIdentifier: '990745400819dd8281d74fff91def2ec0056714c',
  version: '1.5.5.3634-995f1dead'
}
```

### General Information

```js
client.getInfo( function( error, info ) {
  console.log( error || info )
})
```

```js
{
  identity: {
    machineIdentifier: '990745400819dd8281d74fff91def2ec0056714c',
    version: '1.5.6.3790-4613ce077'
  },
  friendlyName: 'something',
  features: ['download_certificates', 'federated-auth', 'news'],
  myPlex: {
    enabled: true,
    mappingState: 'mapped',
    signinState: 'ok',
    subscription: false,
    username: 'user@host.tld'
  },
  allowCameraUpload: false,
  allowChannelAccess: true,
  allowSharing: true,
  allowSync: false,
  backgroundProcessing: true,
  certificate: true,
  companionProxy: true,
  eventStream: true,
  hubSearch: true,
  multiuser: true,
  pluginHost: true,
  readOnlyLibraries: false,
  requestParametersInCookie: true,
  sync: true,
  updater: true,
  transcoder: {
    audio: true,
    lyrics: true,
    photo: true,
    subtitles: true,
    video: true,
    videoBitrates: [ 64, 96, 208, 320, 720, 1500, 2000, 3000, 4000, 8000, 10000, 12000, 20000 ],
    videoQualities: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
    videoResolutions: [ 128, 128, 160, 240, 320, 480, 768, 720, 720, 1080, 1080, 1080, 1080 ]
  },
  directories: {
    activities: { count: 1, title: 'activities' },
    butler: { count: 1, title: 'butler' },
    channels: { count: 1, title: 'channels' },
    clients: { count: 1, title: 'clients' },
    diagnostics: { count: 1, title: 'diagnostics' },
    hubs: { count: 1, title: 'hubs' },
    library: { count: 1, title: 'library' },
    livetv: { count: 2, title: 'livetv' },
    media: { count: 3, title: 'media' },
    neighborhood: { count: 1, title: 'neighborhood' },
    playQueues: { count: 1, title: 'playQueues' },
    player: { count: 1, title: 'player' },
    playlists: { count: 1, title: 'playlists' },
    resources: { count: 1, title: 'resources' },
    search: { count: 1, title: 'search' },
    server: { count: 1, title: 'server' },
    servers: { count: 1, title: 'servers' },
    statistics: { count: 1, title: 'statistics' },
    system: { count: 1, title: 'system' },
    transcode: { count: 1, title: 'transcode' },
    updater: { count: 1, title: 'updater' }
  }
}
```

### Search

```js
client.search({
  query: 'Something',
  year: '2016',
}, function( error, data ) {
  console.log( error || data )
})
```

### Making requests

```js
client.get( '/library/sections/2/all', function( error, data ) {
  // ...
})
```

### Getting account information

```js
client.account( function( error, data ) {
  // ...
})
```

### List clients

```js
client.clients( function( error, data ) {
  // ...
})
```

### List sessions

```js
client.sessions( function( error, data ) {
  // ...
})
```

### List servers

```js
client.servers( function( error, data ) {
  // ...
})
```

### Get preferences

```js
client.preferences( function( error, data ) {
  // ...
})
```

```js
client.systemPreferences( function( error, data ) {
  // ...
})
```

## Examples

### Remotely installing a plugin

```js
var pluginId = 'com.plexapp.plugins.vice'
var client = new Plex.Client({
  url: 'http://127.0.0.1:32400/',
})

client.get( `/system/appstore/apps/${pluginId}/install`, function( error, result ) {
  // ...
})
```
