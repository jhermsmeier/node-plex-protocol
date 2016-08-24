# Plex Media Server API

## Index
<!-- MarkdownTOC -->

- [MediaContainer](#mediacontainer)

<!-- /MarkdownTOC -->

## MediaContainer

One of the most important concepts of the API is that it allows “browsability”. This means that you can start at the “root” endpoint of a Plex Media Server, and walk the full tree of media by following some simple rules.

Most responses from the Media Server come in the form of a Media Container element. Let’s look at (a slightly simplified version of) the root XML:

```xml
<MediaContainer size="20"
  allowCameraUpload="1"
  allowChannelAccess="1"
  allowSharing="1"
  allowSync="1"
  backgroundProcessing="1"
  certificate="1"
  companionProxy="1"
  eventStream="1"
  friendlyName="media.example.com"
  hubSearch="1"
  machineIdentifier="70e654e3de3319f6ecb6a4bfe79751e6142d791d"
  multiuser="1"
  myPlex="1"
  myPlexMappingState="mapped"
  myPlexSigninState="ok"
  myPlexSubscription="1"
  myPlexUsername="user@example.com"
  ownerFeatures="camera_upload,cloudsync,content_filter,home,lyrics,music_videos,pass,premium_music_metadata,sync,trailers"
  platform="Linux"
  platformVersion="4.4.0-31-generic (#50-Ubuntu SMP Wed Jul 13 00:07:12 UTC 2016)"
  pluginHost="1"
  readOnlyLibraries="0"
  requestParametersInCookie="1"
  sync="1"
  transcoderActiveVideoSessions="0"
  transcoderAudio="1"
  transcoderLyrics="1"
  transcoderPhoto="1"
  transcoderSubtitles="1"
  transcoderVideo="1"
  transcoderVideoBitrates="64,96,208,320,720,1500,2000,3000,4000,8000,10000,12000,20000"
  transcoderVideoQualities="0,1,2,3,4,5,6,7,8,9,10,11,12"
  transcoderVideoResolutions="128,128,160,240,320,480,768,720,720,1080,1080,1080,1080"
  updatedAt="1471898996"
  updater="1"
  version="1.0.3.2461-35f0caa">
    <Directory count="1" key="activity" title="activity"/>
    <Directory count="1" key="butler" title="butler"/>
    <Directory count="1" key="channels" title="channels"/>
    <Directory count="1" key="clients" title="clients"/>
    <Directory count="1" key="diagnostics" title="diagnostics"/>
    <Directory count="1" key="hubs" title="hubs"/>
    <Directory count="1" key="library" title="library"/>
    <Directory count="1" key="neighborhood" title="neighborhood"/>
    <Directory count="1" key="playQueues" title="playQueues"/>
    <Directory count="1" key="player" title="player"/>
    <Directory count="1" key="playlists" title="playlists"/>
    <Directory count="1" key="resources" title="resources"/>
    <Directory count="1" key="search" title="search"/>
    <Directory count="1" key="server" title="server"/>
    <Directory count="1" key="servers" title="servers"/>
    <Directory count="1" key="statistics" title="statistics"/>
    <Directory count="1" key="system" title="system"/>
    <Directory count="1" key="transcode" title="transcode"/>
    <Directory count="1" key="updater" title="updater"/>
    <Directory count="2" key="video" title="video"/>
</MediaContainer>
```

Media Containers have top-level information such as number of elements (size), and other pertinent general information. In this case (the root level), it contains information about the server, its capabilities (e.g. has an audio transcoder, supports WebKit), platform, and version. The Directory elements indicate that they can be browsed into, via the key attribute. That attribute is very similar to the src attribute in an HTML hyperlink element; it can be relative (e.g. “music”), absolute (e.g. “/library/sections/1”) or full (e.g. “http://.......”. If you follow these rules for key construction, you can browse your way through the entire media tree with very few exceptions.
