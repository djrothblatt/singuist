json.partial! 'annotation', annotation: @annotation
upvotes = @annotation.upvotes
json.upvotes upvotes.count
upvote = upvotes.where(user_id: current_user.id).first
json.upvote upvote
