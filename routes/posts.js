import express from "express";
import { posts } from "../data/posts.js";

const router = express.Router();

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

export default router;
