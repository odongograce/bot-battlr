import { useEffect, useState } from "react";
import './collection.css';
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
    const [bots, setBots] = useState([]);
    const [selectedBots, setSelectedBots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then((response) => response.json())
            .then((data) => setBots(data))
    }, []);
    const handleCardClick = (bot) => {
      if (!selectedBots.find((b) => b.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Bot Collection</h2>
            <div className="row">
                {bots.map((bot) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={bot.id}>

                        <div className="card h-100 shadow-sm"
                            onClick={() => handleCardClick(bot)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={bot.avatar_url} alt={bot.name} className="card-img-top" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{bot.name}</h5>
                                <p><strong>Health:</strong> {bot.health}</p>
                                <p><strong>Damage:</strong> {bot.damage}</p>
                                <p><strong>Armor:</strong> {bot.armor}</p>
                                <p><strong>Bot Class: </strong>{bot.bot_class}</p>
                                <p><strong>Catch Phrase:</strong> {bot.catchphrase}</p>
                                <p><strong>Avatar_url:</strong> {bot.avatar_url}</p>
                                <p><strong>Created_at:</strong> {bot.created_at}</p>
                                <p><strong>Updated_at:</strong> {bot.updated_at}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="mt-5">
                    
                     <h2 className="text-center mb-4">MY ARMY</h2>
                    {selectedBots.map((bot) => (
                    <YourBotArmy key={bot.id} bot={bot} />))}
                </div>
            </div>

        </div>


    );
}

export default BotCollection;
