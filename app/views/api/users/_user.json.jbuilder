if current_user
  json.extract! current_user, :id, :username, :email  
end
