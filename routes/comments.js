import express from "express";
import { comments } from "../data/comments.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(comments);
});

router.get("/:id", (req, res) => {
  const comment = comments.find(
    (comment) => comment.id === parseInt(req.params.id)
  );
  if (!comment) {
    return res.status(404).json({ message: "Comment not found." });
  }
  res.json(comment);
});

export default router;
