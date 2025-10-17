function YourBotArmy({ bot }) {
    return (
        <div>

            <div className="card p-4 shadow mt-4">
                <h3 className="text-center mb-3">{bot.name}</h3>
                <img
                    src={bot.avatar_url}
                    alt={bot.name}
                    className="img-fluid rounded mb-3"
                    style={{ maxWidth: "200px", margin: "0 auto", display: "block" }}
                />
                <p><strong>Health:</strong> {bot.health}</p>
                <p><strong>Damage:</strong> {bot.damage}</p>
                <p><strong>Armor:</strong> {bot.armor}</p>
                <p><strong>Class:</strong> {bot.bot_class}</p>
                <p><strong>Catch Phrase:</strong> {bot.catchphrase}</p>
                <p><strong>Created At:</strong> {bot.created_at}</p>
                <p><strong>Updated At:</strong> {bot.updated_at}</p>
            </div>

        </div>
    );
}

export default YourBotArmy;
