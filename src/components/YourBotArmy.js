import React, { useState, useEffect } from "react";
import BotCard from "./BotCard"

function YourBotArmy({ army, setArmy, setBots, handleArmy }) {
  //your bot army code here...
  const dismissArmy = (bot) => {
    setArmy([...army.filter((unit) => { return unit.id !== bot.id })])
  }

  const dischargeBot = (bot) => {

    fetch(`http://localhost:8002/bots/${bot.id}`, { method: "DELETE" })

    setArmy([...army.filter((unit) => { return unit.id !== bot.id })])

    console.log("discharge", bot.id)
  }



  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            army.map((bot) => {
              return (
                < BotCard bot={bot} setBots={setBots} handleArmy={handleArmy} dismissArmy={dismissArmy} dischargeBot={dischargeBot} />
              )
            })
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
