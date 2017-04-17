# API Endpoints

## HTML API
### Root
- GET / - Loads React web app

## JSON API
### Users
- POST /api/users

### Session
- POST /api/session
- DELETE /api/session

### Tracks
- GET /api/tracks
  - Tracks index (and search, if I get there)
- POST /api/tracks
- GET /api/tracks/:track_id
- PATCH /api/tracks/:track_id
- DELETE /api/tracks/:track_id
- GET /api/tracks/:track_id/annotations
  - Index of all annotations for a track

### Annotation
- A track's annotations will be included in the track show template
- GET /api/annotations/annotation_id
- POST /api/tracks/:track_id/annotations : add annotation to track
- DELETE /api/annotations/:annotation_id
- PATCH /api/annotations/:annotation_id

### Comments
- An annotation's comments will be included in its show template
- POST /api/tracks/:track_id/comments
- POST /api/annotations/:annotation_id/comments
- DELETE /api/comments/
- PATCH /api/comments

### Votes
- The sum of an annotation/comment's votes will be included in its
  show template
- POST /api/annotations/:annotation_id/votes
- POST /api/comments/:comment_id/votes
- PATCH /api/votes/:vote_id
- DELETE /api/votes/:vote_id
