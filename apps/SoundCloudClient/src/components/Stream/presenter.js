import React from "react";
import GggUsers from "../GggUsers";
/*It’s called stateless functional component, because it only gets an input 
and generates an output. There are no side effects happening (functional) 
and our component doesn’t know internal state at all (stateless). It’s 
only a function which gets a state and returns a view: (State) => View. */
function Stream({ tracks = [], gggTimer }) {
  console.log("Stream.presenter.js:", JSON.stringify(tracks));
  return (
    <div>
      {tracks.map((track, key) => {
        return (
          <div className="track" key={key}>
            {track.title}
          </div>
        );
      })}
      <hr />
      <div>gggTime:&nbsp;{gggTimer.gggTime}</div>
      <GggUsers />
    </div>
  );
}

export default Stream;
