## Component Hierarchy
### AuthFormContainer
- AuthForm

### HomeContainer
- Home
- Header
- TracksIndex

### SongForm
- NewSongButton

### TracksIndex
- TrackIndexItem
  - Link to TrackDetail

### TrackContainer
- TrackDetail
  - AnnotationContainer
    - Annotation
      - VotesContainer
    - CommentsIndex
      - CommentIndexItem
	    - VotesContainer

## Routes

Path                                                                     |   Component
-------------------------------------------------------------------------|--------------
/signup                                                                  | AuthFormContainer
/login                                                                   | AuthFormContainer
/                                                                        | HomeContainer
/new-track                                                               | SongForm
/tracks/:track_id                                                        | TracksContainer
/tracks/:track_id/annotations/:annotation_id                             | AnnotationContainer
/tracks/:track_id/annotations/:annotation_id/comments/:comment_id/       | CommentContainer
