SERVER

create new directory in project folder and cd into new folder
- mkdir react-express
- cd react-express

install dependencies
- npm install express concurrently
- npm install nodemon --save-dev

add scripts to package.json
- 	"start": "node server.js", "server": "nodemon server.js"

create server.js file
- touch server.js

create local .json file
- touch customers.json

run server
- npm run server

===============================================================================
CLIENT

create client app and cd into new folder
- create-react-app client
- cd client

create proxy line in client package.json
- "proxy": "http//localhost:5000",

run client
- npm start

create components folder
- src/components/customers

create customers component
- customers.js
- customers.css


===============================================================================
OPTIONAL 

concurrently set up in server package.json
- "client": "npm start --prefix client",
- "dev": "concurrently \"npm run server\" \"npm run client\""

run server and client
- npm run dev

===============================================================================
GIT

remove git file from client folder
- cmd + shift + .
- delete git

set up git in main app folder
- add .gitignore file - /node_modules
- git init
- git status
- git add .
- git status
- git commit -m 'intial commit'

create git respository on github
- copy code to git push





		