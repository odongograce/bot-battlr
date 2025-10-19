import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);


  useEffect(() => {
    fetch("http://localhost:3000/botarmy")
      .then((res) => res.json())
      .then((data) => setArmy(data));
  }, []);


  const addToArmy = (bot) => {
    const alreadyInArmy = army.some((b) => b.name === bot.name);
    if (alreadyInArmy) return;

    const newBot = {
      name: bot.name,
      health: bot.health,
      damage: bot.damage,
      armor: bot.armor,
      bot_class: bot.bot_class,
      avatar_url: bot.avatar_url,
      created_at: bot.created_at,
      updated_at: bot.updated_at,
    };

    fetch("http://localhost:3000/botarmy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBot),
    })
      .then((res) => res.json())
      .then((savedBot) => setArmy([...army, savedBot]));
  };


  const handleRelease = (id) => {
    setArmy(army.filter((b) => b.id !== id));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/botarmy/${id}`, { method: "DELETE" })
      .then(() => setArmy(army.filter((b) => b.id !== id)));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Bot Collection</h2>

      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => addToArmy(bot)}
            >
              <img
                src={bot.avatar_url}
                alt={bot.name}
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{bot.name}</h5>
                <p><strong>Health:</strong> {bot.health}</p>
                <p><strong>Damage:</strong> {bot.damage}</p>
                <p><strong>Armor:</strong> {bot.armor}</p>
                <p><strong>Class:</strong> {bot.bot_class}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h2 className="text-center mb-4">My Army</h2>
        {army.length === 0 ? (
          <p className="text-center">No bots in your army yet.</p>
        ) : (
          <div className="row">
            {army.map((bot) => (
              <div key={bot.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <YourBotArmy
                  bot={bot}
                  onRelease={() => handleRelease(bot.id)}
                  onDelete={() => handleDelete(bot.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
