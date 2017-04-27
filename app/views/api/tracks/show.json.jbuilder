json.id @track.id
json.name @track.name
json.lyrics simple_format(@track.lyrics)
json.description simple_format(@track.description)
json.language @track.language
json.artist @track.artist
