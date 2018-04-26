import * as actionTypes from "../constants/actionTypes";
/*Our first action creator takes as input some tracks which 
we want to set to our global state. It returns an object with an 
action type and a payload. */
export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  };
}
