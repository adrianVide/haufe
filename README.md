# Rick & Morty Node + React/Redux

WebApp fed by Rick and Morty API to React/Redux through a Node/Expres Backend. Storing data in a MongoDB database. 

## Installation

You need to have on your system up and running Node and MongoDB

Navigate to 'front' and 'back' folders in project folder and run in both:

```bash
npm i
```

## Usage

You need available ports 3000 and 3001 and MongoDB running, otherwise it might not work as intended.

In back folder run: 

```bash
npm run dev
```

In front folder run: 

```bash
npm start
```

## Included dependencies

### Back

    "axios": "^0.21.1",
    So Node can query another API.
    "bcryptjs": "^2.4.3",
    To encypt passwords before storing them and comparing later.
    "cookie-parser": "^1.4.5",
    To parse cookie header
    "cors": "^2.8.5",
    So back trusts front.
    "express": "^4.17.1",
    It handles pretty much everything under the hood.
    "express-session": "^1.17.1",
    To keep it active
    "mongoose": "^5.11.17",
    To interact with Mongo
    "nodemon": "^2.0.7",
    To keep restarting after every change, for dev purposes.
    "passport": "^0.4.1",
    To register and login.
    "passport-local": "^1.0.0"
    Strategy for passport.

### Front

    "axios": "^0.21.1",
    To query back
    "react": "^17.0.1",
    It is based on this...
    "react-redux": "^7.2.2",
    The state manager
    "react-router-dom": "^5.2.0",
    For using links and routes and switches on React
    "react-scripts": "4.0.2",
    "redux-saga": "^1.1.3",
    The state manager can query the back, something like axios
    "web-vitals": "^1.1.0"
    It was there when I first installed it... 
