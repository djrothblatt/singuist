@tracks.each do |track|
  json.set! track.id do
    json.id track.id
    json.name track.name
    json.artist track.artist
  end
end

