const express = require('express');
//const cors = require('cors');
//const bodyParser = require('body-parser');
//const morgan = require('morgan');

const app = express();

//app.use(morgan('tiny'));
//app.use(cors);
//app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello world");
});

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 4000;
app.listen(port, host, () => {
    console.log(`listening on port ${port}`);
});