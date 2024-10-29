import express from "express";
import { posts } from "../data/posts.js";

const router = express.Router();


//GET /POSTS
router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: "Post not found." });
  }
  res.json(post);
});

// POST /posts
router.post("/", (req, res) => {
  const { title, content } = req.body;


  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required." });
  }

  // Create a new post
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});


//PATCH 
router.patch("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found." });
  }

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);

});


// // DELETE 

// router.delete("/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const post = posts.find((post) => post.id === userId);
//   if (userId !== post.id) {
//     return res.status(404).json({ message: "Post not found." });
//   }

//   users.splice(post, 1);
//   res.sendStatus(204).send();
// });



export default router;
