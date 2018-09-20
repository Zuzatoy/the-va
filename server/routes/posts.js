const express = require('express')

const router = express.Router()

const db = require('../db/posts')

router.get('/', getPosts)

function getPosts (req, res) {
  db.getPosts()
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

router.get('/:id', getPostWithReplies)

function getPostWithReplies (req, res) {
  const postId = req.params.id
  db.getPostWithReplies(postId)
    .then(postData => {
      res.status(200).json(postData)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = router