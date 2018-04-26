/*In that file we can bundle all of our action creators to export 
them as public interface to the rest of the app. Whenever we need to 
access some action creator from somewhere else, we have a clearly 
defined interface for that, without reaching into every action creator 
file itself. We will do the same later on for our reducers. */
import { setTracks } from "./track";
import { getUsers } from "./gggUsers";

export { setTracks, getUsers };
