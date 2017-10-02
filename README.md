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
  - [General Information](#general-information)

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
