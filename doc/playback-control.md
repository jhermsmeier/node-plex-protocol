# Plex Media Server API

## Playback

Play

```
http://:/player/playback/playMedia?key=%2Flibrary%2Fmetadata%2F&offset=0&X-Plex-Client-Identifier=&machineIdentifier=&address=&port=&protocol=http&path=http%3A%2F%2F%3A%2Flibrary%2Fmetadata%2F
```

- `/player/navigation/home`
- `/player/navigation/music`
- `/player/navigation/moveUp`
- `/player/navigation/moveDown`
- `/player/navigation/moveLeft`
- `/player/navigation/moveRight`
- `/player/navigation/select`
- `/player/navigation/back`
- `/player/playback/play`
- `/player/playback/pause`
- `/player/playback/stop`
- `/player/playback/skipNext`
- `/player/playback/skipPrevious`
- `/player/playback/stepForward`
- `/player/playback/stepBack`
- `/player/playback/setParameters?volume=100?&shuffle=0/1&repeat=0/1/2`
- `/player/playback/setStreams?audioStreamID=X&subtitleStreamID=Y&videoStreamID=Z`
- `/player/playback/seekTo?offset=XXX - Offset is measured in milliseconds.`
- `/player/playback/skipTo?key=X - Playback skips to item with matching key.`
- `/player/playback/playMedia - now accepts key offset machineIdentifier`
- `/player/navigation/nextLetter`
- `/player/navigation/previousLetter`
- `/player/navigation/toggleOSD`
