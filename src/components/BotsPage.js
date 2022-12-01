import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])

  useEffect(() => {
    const request = async () => {
      const req = await fetch("http://localhost:8002/bots")
      const res = await req.json()

      setBots(res)

    }
    request()
  }, [])

  const handleArmy = (bot) => {

    if (army.includes(bot)) return
    setArmy([...army, bot])
    console.log(army)
  }


  return (
    <div>
      <YourBotArmy army={army} setArmy={setArmy} setBots={setBots} />
      <BotCollection bots={bots} setBots={setBots} army={army} setArmy={setArmy} handleArmy={handleArmy} />
    </div>
  )
}

export default BotsPage;
