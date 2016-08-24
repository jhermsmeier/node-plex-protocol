# Plex Media Server API

## MediaTypes

| id | type         | title       | element   | related |
|----|--------------|-------------|-----------|---------|
| 1  | movie        | Movie       | video     |         |
| 2  | show         | Show        | directory |   3,4   |
| 3  | season       | Season      | directory |   2,4   |
| 4  | episode      | Episode     | video     |   2,3   |
| 5  | trailer      | Trailer     | video     |         |
| 6  | comic        | Comic       | photo     |         |
| 7  | person       | Person      | directory |         |
| 8  | artist       | Artist      | directory |   9,10  |
| 9  | album        | Album       | directory |   8,10  |
| 10 | track        | Track       | audio     |   8,9   |
| 11 | photoAlbum   | Photo Album | directory |   12,13 |
| 12 | picture      | Picture     | photo     |   11    |
| 13 | photo        | Photo       | photo     |   11    |
| 14 | clip         | Clip        | video     |         |
| 15 | playlistItem | Clip        | video     |         |

