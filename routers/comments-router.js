const express = require('express')

const data = require('../data/db')
const db = require("../data/db")

const router = express.Router()


// GET COMMENTS

router.get('/:id/comments', (req, res) =>{
    const {id} = req.params;

    db.findPostComments(id)
    .then(comments => {
        res.status(200).json({ data: comments });
    })
    .catch(error => {
        console.log(error.message);
        res.status(500).json({ errorMessage: "we could not get the hubs data" });
    });
    })


router.post('/:id/comments', (req,res) =>{
    const commentsPost = req.body;

    db.insertComment(commentsPost)
        .then(comments => {
            res.status(201).json({data: comments, data: req.body
            })
        })
        .catch(err =>{
            console.log(err.comments)
            res.status(404).json({message: "The post with the specified ID does not exist."})
        })
})
   

module.exports = router