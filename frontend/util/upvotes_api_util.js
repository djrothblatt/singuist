export const createUpvote = (annotation, user) => {
    return $.ajax({
        method: 'POST',
        url: 'api/upvotes',
        data: {
            upvote: {
                annotation_id: annotation.id,
                user_id: user.id
            }
        }
    });
};

export const destroyUpvote = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/upvotes/${id}`
    });
};
