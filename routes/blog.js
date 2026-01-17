const express = require("express");

const router = express.Router();

const{createComment} = require("../controllers/commentController");
const{createPost,getAllposts} = require("../controllers/postController");
const{likePost, unlikePost}= require("../controllers/likeController");
console.log("createPost:", createPost);
console.log("likePost:", likePost);



router.post("/comments/create",createComment );
router.post("/posts/create", createPost);
router.get("/posts",getAllposts);
router.post("/likes/like",likePost); 
router.post("/likes/unlike",unlikePost);

module.exports = router;