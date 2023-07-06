import express from "express";
const router = express.Router()
const blogController = require("../controller/blogController")

router.route('/').post(blogController.blogCreate)
router.route('/').get(blogController.blogFetchAll)
router.route('/:id').get(blogController.blogById)
router.route('/:id').put(blogController.blogUpdateById)
router.route('/:id').delete(blogController.blogDeleteById)
router.route('/comment/:id').put(blogController.addComment)

module.exports = router