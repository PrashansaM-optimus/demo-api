"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const app = express(); // executes express
// port setting
app.set("port", 3000);
app.listen(app.get('port'), () => {
    console.log('APP is running on https://localhost:%d', app.get('port'));
});
// DB connection
const uri = 'mongodb+srv://prashansa:<password>@cluster0-vuuj0.mongodb.net/demo-api?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Error connecting with DB', err);
    }
    else {
        console.log('Connected with DB');
    }
});
// body parser used for parsing the add or update api's
app.use(bodyParser.json());
// use routes
app.use(routes_1.default);
//# sourceMappingURL=app.js.map