import chalk from "chalk"; // Change color of text in terminal
import express from "express"; // Popular lib of js
import createDebug from 'debug'; // For show what website doing
import morgan from 'morgan'; // For deep details of device that acces to website with debug lib

const app = express();
const port = 2025;
const debug = createDebug('app');

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send("Hello KEEM");
});

app.listen(port, () => {
    debug("Listening on port %s", chalk.green(port));
});