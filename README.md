# demo-api
This project demonstrate API creation using node and mongodb

# Setup the project:
- npm i
- npm start
- In browser, hit http://localhost:3000/meeting, all the meetings will be displayed on the browser

# Notes:
How to connect to MongoDB
- Instead of locally creating a mongo database, this project uses database as a service from https://cloud.mongodb.com.
- The connection to mongoDB is based on the connection string (app.ts - line 15)
- Create account on https://cloud.mongodb.com 
- Create database (demo-api) and collection (meeting)
- Update the connection string (make sure to replace <password> with the actual password)

