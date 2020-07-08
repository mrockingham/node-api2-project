const express = require('express');
const Color = require('colors');
const morgan = require('morgan')
const postRouter = require('./routers/post-router')
const commentsRouter = require('./routers/comments-router')
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(cors())
server.use(morgan('dev'))


server.get("/", (req, res) => {
    res.send(`testing`);
});

server.use('/api/post',postRouter)
server.use('/api/post',commentsRouter)

const PORT = 8000;
server.listen(PORT, () =>{
    console.log(`\n*** Server Running on:  port ${PORT} ***\n`.blue)
})
