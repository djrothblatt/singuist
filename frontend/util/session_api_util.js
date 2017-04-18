export const signup = user => {
    return $.ajax({
	method: 'POST',
	url: 'api/users',
	data: { user }
    });
};

export const  = user => {
    return $.ajax({
	method: 'POST',
	url: 'api/session',
	data: { user }
    });
};

export const signup = () => {
    return $.ajax({
	method: 'DELETE',
	url: 'api/session',
    })
};
