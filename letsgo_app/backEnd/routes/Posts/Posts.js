const postRouters = require('express').Router();
const {getAllPosts, getSinglePost, updateSinglePost, deleteSinglePost, addNewPost} = require('../../queries/Post/Posts');

postRouters.get('/', getAllPosts);
postRouters.get('/:id', getSinglePost);
postRouters.post('/', updateSinglePost);
postRouters.delete('/:id', deleteSinglePost);
postRouters.patch('/:id', addNewPost);

module.exports = postRouters