import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from 'body-parser';
import router from './routes';

const app = express(); // executes express

// port setting
app.set("port", 3000);
app.listen(app.get('port'), () => {
    console.log('APP is running on https://localhost:%d', app.get('port'));
});

// DB connection
const uri: string = 'mongodb+srv://prashansa:<password>@cluster0-vuuj0.mongodb.net/demo-api?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true}, (err) => {
    if (err) {
        console.log('Error connecting with DB', err);
    } else {
        console.log('Connected with DB');
    }
});

// body parser used for parsing the add or update api's
app.use(bodyParser.json());
// use routes
app.use(router);


