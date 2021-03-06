export const fetchAnnotations = trackId => {
    return $.ajax({
        method: 'GET',
        url: `api/tracks/${trackId}/annotations`
    });
};

export const fetchAnnotation = id => {
    return $.ajax({
        method: 'GET',
        url: `api/annotations/${id}`
    });
};

export const createNewAnnotation = annotation => {
    return $.ajax({
        method: 'POST',
        url: 'api/annotations',
        data: {
            annotation: {
                user_id: annotation.userId,
                body: annotation.body,
                start_index: annotation.start,
                end_index: annotation.end,
                track_id: annotation.trackId
            }
        }
    });
};

export const updateAnnotation = annotation => {
    return $.ajax({
        method: 'PATCH',
        url: `api/annotations/${annotation.id}`,
        data: { annotation }
    });
};

export const destroyAnnotation = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/annotations/${id}`
    });
};
