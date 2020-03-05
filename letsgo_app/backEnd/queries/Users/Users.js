const db = require('../../db/index');

const getAllUsers = async (req, res, next) =>{
    try{
        let allUsers = await db.any('SELECT * FROM users');
        res.status(200).json({
            status: 'success',
            message: 'retrieves all users',
            payload: allUsers
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve all users'
        })
    }
}

const getSingleUser = async (req, res, next) =>{
    try{
        let singleUser = await db.one('SELECT * FROM users WHERE id= $1', [req.params.id]);
        res.status(200).json({
            status: 'success',
            message: 'retrieves single user',
            payload: singleUser
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not get single user',
        })
    }
}

const getNewUser = async (req, res, next) =>{
    try{
        let newUser = await db.none('INSERT INTO users (username, password, email, bio, proPicURL) VALUES(${username}, ${password}, ${email}, ${bio}, ${proPicURL})', req.body)
        res.status(200).json({
            status: 'success',
            message: 'created a new user',
            payload: newUser
        })

    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not created the new user'
        })
    }
}

const updateSingleUser = async (req, res, next) =>{
    try{
        let updateUser = await db.one('UPDATE users SET username = ${username}, password = ${password}, email = ${email}, bio = ${bio}, proPicURL = ${proPicURL} WHERE id = ${id} RETURNING *', req.body)
        res.status(200).json({
            status: 'succes',
            message: 'updated User',
            payload: updateUser
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not update user'
        })
    }
}

const deleteSingleUser = async (req, res, next) =>{
    try{
        let deleteUser = await db.one('DELETE FROM users WHERE id = $1 RETURNING *', [req.params.id]);
        res.status(200).json({
            status: 'success',
            message: 'deleted user',
            payload: deleteUser
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not delete user'
        })
    }
}
module.exports = {getAllUsers, getSingleUser, getNewUser, deleteSingleUser, updateSingleUser}