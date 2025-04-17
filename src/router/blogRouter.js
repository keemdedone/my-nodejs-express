import express from "express"; // Popular lib of js
import fs from "fs";

const blogRouter = express.Router();
const blogs = JSON.parse(fs.readFileSync(new URL('../../data/blog.json', import.meta.url)));

blogRouter.get('/', (req, res) => {
    // res.send('Blog Home Page');
    res.render("blog", blogs)
});

blogRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    // res.send(`Blog ID: ${id}`);
    res.render("blog_details", {
        blog: blogs["blogs"][Number(id) - 1]
    });
});

export default blogRouter;