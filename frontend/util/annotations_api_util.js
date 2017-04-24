export const fetchAnnotations = () => {
    return $.ajax({
	method: 'GET',
	url: 'api/annotations'
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
	data: { annotation }
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
