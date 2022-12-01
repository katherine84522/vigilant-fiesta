import React from "react";
import BotSpecs from './BotSpecs'

function BotCollection({ bots, setBots, handleArmy }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bots.map((bot) => {
            return (
              < BotSpecs bot={bot} setBots={setBots} handleArmy={handleArmy} />
            )
          })
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
