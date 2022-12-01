import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])
  const [enlisted, setEnlisted] = useState([])

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
    // console.log(army)
    // setBots(bots.filter((unit) => { unit.id !== bot.id }))

    setEnlisted([...enlisted, bot])
  }

  return (
    <div>
      <label> Sort by health:</label>
      < select>
        <option>1</option>
        <option>2</option>
      </select>
      <YourBotArmy army={army} setArmy={setArmy} setBots={setBots} />
      <BotCollection bots={bots} setBots={setBots} army={army} setArmy={setArmy} handleArmy={handleArmy} enlisted={enlisted} setEnlisted={setEnlisted} />
    </div>
  )
}

export default BotsPage;
