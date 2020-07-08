const express = require('express');

const data = require('../data/db');
const db = require('../data/db');

const router = express.Router();


// GET POSTS

router.get('/', (req, res) =>{
    db.find()
    .then(posts =>{
        res.status(200).json({data:posts});
    })
    .catch(err =>{
        res.status(500).json({ error: "The post information could not be retrieved." });
    })
});

router.get('/:id', (req,res) =>{
    db.findById(req.params.id)
    .then(post =>{
        if(post){
            res.status(200).json(post)
        } else{
            res.status(404).json({ message: "The post with the specified ID does not exist."})
        }
    })
})

//POST "Post"

router.post('/', (req, res)=>{
    db.insert(req.body)
    .then(posts =>{
        res.status(201).json({what_you_have_posted: req.body, data: posts })
    })
    .catch(err =>{
        res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    })
})

//DELETE POSTS

router.delete('/:id', (req, res)=>{
  db.remove(req.params.id)
  .then( id =>{
    if(id > 0) {
        res.status(200).json({post: req})
        console.log(req.params.id)
    } else {
        res.status(400).json({message: " The post with the specified ID does not exist"})
    }
  })  
  .catch(err =>{
      res.status(500).json({message:'Message not removed.....muhahahahaahahaha'})
  })
})




module.exports = router