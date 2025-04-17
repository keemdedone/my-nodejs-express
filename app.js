import chalk from "chalk"; // Change color of text in terminal
import express from "express"; // Popular lib of js
import morgan from 'morgan'; // For deep details of search engine that acces to website with debug lib
import path from 'path';
import { fileURLToPath } from 'url'; // For import current path of file
import blogRouter from './src/router/blogRouter.js';

const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('combined'));

app.set("views", "./src/views");
app.set("view engine", "ejs"); // use ejs for create code like PHP style

app.use(express.static(path.join(__dirname, 'public'))); // must change index.html in this folder to prevent content overide
app.use('/blog', blogRouter);

app.get("/", (req, res) => {
    res.render("index", { username: "KEEM", customers: ["customer-1", "customer-2", "customer-3"] });
});

app.listen(PORT, () => {
    console.log("Listening on port " + chalk.green(PORT));
});