import * as TracksApiUtil from '../util/tracks_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

export const fetchTracks = () => dispatch => {
    return TracksApiUtil.fetchTracks()
	.then(tracks => dispatch(receiveTracks(tracks)));
};

const thunkAction = promise => arg => dispatch => {
    return promise(arg).then(track => dispatch(receiveTrack(track)));
};

export const fetchTrack = id => dispatch => {
    return TracksApiUtil.fetchTrack(id)
	.then(track => dispatch(receiveTrack(track)));
}

//export const fetchTrack = thunkAction(TracksApiUtil.fetchTrack);
export const createTrack = thunkAction(TracksApiUtil.createNewTrack);
export const updateTrack = thunkAction(TracksApiUtil.updateTrack);

export const destroyTrack = id => dispatch => {
    return TracksApiUtil.destroyTrack(id)
	.then(() => dispatch(receiveTrack(null)));
};
