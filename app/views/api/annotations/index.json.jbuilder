@annotations.each do |anno|
  json.set! anno.id do
    json.partial! 'annotation', annotation: anno
  end
end
