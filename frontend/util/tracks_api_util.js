export const fetchTracks = () => {
    return $.ajax({
	method: 'GET',
	url: 'api/tracks'
    });
};

export const fetchTrack = id => {
    return $.ajax({
	method: 'GET',
	url: `api/tracks/${id}`
    });
};

export const createNewTrack = track => {
    return $.ajax({
	method: 'POST',
	url: 'api/tracks',
	data: { track }
    });
};

export const updateTrack = track => {
    return $.ajax({
	method: 'PATCH',
	url: `api/tracks/${track.id}`,
	data: { track }
    });
};

export const destroyTrack = id => {
    return $.ajax({
	method: 'DELETE',
	url: `api/tracks/${id}`
    });
};
