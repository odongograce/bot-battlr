import React from "react";

function YourBotArmy({ bot, onDischarge, onDelete }) {
  return (
    <div className="card p-4 shadow text-center">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="img-fluid rounded mb-3"
        style={{
          maxWidth: "200px",
          margin: "0 auto",
          display: "block",
          borderRadius: "50%",
        }}
      />

      <h4 className="mb-3">{bot.name}</h4>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>

      <div className="d-flex justify-content-around mt-3">
        <button className="btn btn-warning" onClick={onDischarge}>
         Discharge
        </button>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default YourBotArmy;
