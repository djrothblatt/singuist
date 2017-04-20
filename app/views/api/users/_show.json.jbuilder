if current_user
  json.extract! current_user, :username, :email
end
