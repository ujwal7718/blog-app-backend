

const mongoose = require("mongoose");

require("../models/commentModel");
require("../models/postModel");

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
     console.log("Comment import:", Comment);
     console.log("Type of Comment:", typeof Comment);

    const { post, user, body } = req.body;

    const savedComment = await new Comment({
      post,
      user,
      body,
    }).save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    ).populate("comments");

    return res.status(201).json({ post: updatedPost });

  } catch (error) {
    console.error("Create Comment Error:", error);
    return res.status(500).json({ error: error.message });
  }
};
