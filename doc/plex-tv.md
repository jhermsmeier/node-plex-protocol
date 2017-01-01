# Plex Media Server API

## Index
<!-- MarkdownTOC -->

- [URL's](#urls)
- [Request Headers](#request-headers)
- [Routes](#routes)
- [Authentication](#authentication)
- [Example Output](#example-output)

<!-- /MarkdownTOC -->

## URL's

| Method | URL                               | Description                                                                                          |
|--------|-----------------------------------|------------------------------------------------------------------------------------------------------|
|  POST  | https://plex.tv/users/sign_in.xml | Use basic auth to Sign in to plex.tv for validating plex username/password and receive an auth token |

## Request Headers

| Header                   | Value                                                                  |
|--------------------------|------------------------------------------------------------------------|
| X-Plex-Platform          | (Platform name, eg iOS, MacOSX, Android, LG, etc)                      |
| X-Plex-Platform-Version  | (Operating system version, eg 4.3.1, 10.6.7, 3.2)                      |
| X-Plex-Provides          | (One or more of [player, controller, server])                          |
| X-Plex-Client-Identifier | (UUID, serial number, or other number unique per device)               |
| X-Plex-Product           | (Plex application name, eg Laika, Plex Media Server, Media Link)       |
| X-Plex-Version           | (Plex application version number)                                      |
| X-Plex-Device            | (Device name and model number, eg iPhone3,2, Motorola XOOM™, LG5200TV) |
| X-Plex-Device-Name       | (Primary name for the device eg. "Plex Web (Chrome)")                  |

## Routes

| Method | https://plex.tv/devices.xml                             | Gets a list of available clients and servers |
|:------:|---------------------------------------------------------|----------------------------------------------|
|   GET  | https://plex.tv/servers.xml                             | Gets a list of servers and their sections    |
|   GET  | https://plex.tv/library/sections?redirect=0             | Get cloud Sync Sections                      |
|   GET  | https://plex.tv/pms/servers.xml?includeLite=1           | Get simple list of servers                   |
|   GET  | https://plex.tv/web/translations/en.json                | Get Translations for example: en             |
|   GET  | https://plex.tv/users/account                           | Get account information                      |
|   GET  | https://plex.tv/pms/friends/all                         | Get PMS server shares (?)                    |
|   GET  | https://plex.tv/pms/friends/requests                    | Get PMS server share requests (?)            |
|   GET  | https://plex.tv/pms/playlists/queue/unwatched           | Get Unwatched playlist queue (?)             |
|   GET  | https://plex.tv/pms/playlists/recommendations/unwatched | Get Unwatched playlist recommendations (?)   |
|   GET  | https://plex.tv/pms/:/ip                                | Get Current client remote IP                 |

## Authentication

- Must be logged in (web/cookie) or pass basic auth
- Must provide server token from plex.tv/pms/servers.xml

| Method | URL | Description
|:----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|
| GET | https://plex.tv/?X-Plex-Client-Identifier=unique id&X-Plex-Product=Plex+Web&X-Plex-Device=OSX&X-Plex-Platform=Chrome&X-Plex-Platform-Version=37.0&X-Plex-Version=2.2.4&X-Plex-Device-Name=Plex+Web+(Chrome)&X-Plex-Token=token |Get Cloud Sync server info|

## Example Output

```
https://plex.tv/devices.xml
```

```
"> " version="2.1.5" id="" createdAt="1387598690" lastSeenAt="1398680926" screenResolution="" screenDensity=""> " product="Plex Media Server" productVersion="0.9.9.10.458-008ea34" platform="Windows" platformVersion="6.2 (Build 9200)" device="" model="" vendor="" provides="server" clientIdentifier="" version="0.9.9.10.458-008ea34" id="12084527" createdAt="1398136888" lastSeenAt="1398680926" screenResolution="" screenDensity=""> :32400"/> :32400"/> :32400"/> :32400"/> :32400"/> " product="Plex Home Theater" productVersion="1.0.13.222-ff029016" platform="Plex Home Theater" platformVersion="" device="PC" model="Windows" vendor="" provides="player" clientIdentifier="" version="1.0.13.222-ff029016" id="5200304" createdAt="1377450846" lastSeenAt="1398680910" screenResolution="" screenDensity=""> :3005/"/> :3005/"/> :3005/"/> :3005/"/> ........
```
