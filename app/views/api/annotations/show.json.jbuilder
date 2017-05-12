json.partial! 'annotation', annotation: @annotation
upvotes = @annotation.upvotes
json.upvotes upvotes.count
upvote = current_user ? upvotes.where(user_id: current_user.id).first : nil
json.upvote upvote
