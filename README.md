# Singuist

[Singuist Live][heroku]

[heroku]: http://singuist.com

Singuist is a full-stack web application inspired by Genius (Rap
Genius). It uses a Ruby on Rails backend, a PostgreSQL database, and
React.js with Redux on the frontend.

## Features & Implementation

### Tracks

The tracks are stored in a table in the database, which has columns
for `id`, `body`, `language`, `name`, `description`, and `artist`.

Tracks are rendered as `TrackIndexItem`s in the `TrackIndex`
component, which shows the track's `name` and `artist`, and in the
`TrackDetail` component, which shows all of the track's components.

Tracks are created through the `NewTrackForm` component, which render
a form for the user to fill in the details of a track.

### Annotation Creation and Rendering

Annotations are stored in a table in the database, with columns for
`id`, `user_id`, `track_id`, `body`, `start_index`, and `end_index`.
`start_index` and `end_index` represent the range of text that the
annotation is associated with in its track's lyrics.

Annotations are rendered in the `TrackDetail` component, which shows
annotations in two ways:

1. Track lyrics are highlighted in the places where there are
   annotations. This highlighting is done with the component's
   `stringToSpans` method, which iterates through the lyrics,
   slices the lyrics from the start of each annotation to its end, and
   wraps the slice in an HTML span tag. The span has an `annotation`
   class, which sets the span's background color to indicate that an
   annotation is present. When the user mouses over a
   `span.annotation`, the background color changes to indicate the
   range of text the annotation covers. When the user clicks a
   `span.annotation`, `TrackDetail` renders the details of the
   annotation.
2. `TrackDetail` contains a `.description` side panel that renders the
`body` of the annotation the user has clicked on, if any.

If a user wants to create an annotation, they highlight the range of
text they wish to annotate, and enter the text of their annotation in
the `.description` side panel. The annotation's text entry is
implemented using the React library Draft.js, which gives the user a
clean, simple writing experience.
