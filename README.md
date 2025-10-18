**TITLE: Bot Collection App**
This is a simple React app that displays a collection of bots and allows users to build their own custom Bot Army.
Data is managed using JSON Server, and the app interacts with the backend through fetch API requests (GET, POST, DELETE).

**Features**
- View all bots from the backend (/bots endpoint).
- Add bots to your personal army (/botarmy endpoint).
- Prevents duplicate entries in your army.
- Discharge a bot (remove from army but keep it in the collection).
- Delete a bot (remove from backend army only).
- Data in your army persists even after refreshing the page since data is stored in the backend.

**Tech Stack**
- React – Frontend framework
- JSON Server – Mock backend API
- CSS / Bootstrap – Styling

**Setup Instructions**
- Clone the repository: git clone "https..."
- Install dependencies: npm install
- **Ensure json-server is installed globally:** npm install -g json-server **Then start the backend (JSON Server):** json-server --watch db.json --port 3002
- Start the React app: npm start

**How It Works**
- When the app loads, it fetches all bots from the /bots endpoint and displays them in the Bot Collection.
- Clicking a card sends a POST request to /botarmy with the selected bot’s data.
- Duplicate bots are prevented automatically.
- Clicking discharge removes the bot from your army but keeps it in the main collection.
- Clicking delete permanently removes the bot from your army (DELETE from /botarmy) and does not affect the main collection.
- Your army contents remains intact for the cards discharged even after refreshing the page, because the data is stored on the backend. Data deleted won't be seen when page refreshes.

**Author**
Grace Odongo
