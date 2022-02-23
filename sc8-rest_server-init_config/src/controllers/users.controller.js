// users - controllers

const {response} = require('express')

const usersGet = (req,res = response) => {
    res.json({
        msg:'get api - controller'
    })
}

const usersPut = (req,res = response) => {
    res.json({
        msg:'put api - controller'
    })
}

const usersPatch = (req,res = response) => {
    res.json({
        msg:'patch api - controller'
    })
}

const usersPost = (req,res = response) => {
    res.json({
        msg:'post api - controller'
    })
}

const usersDelete = (req,res = response) => {
    res.json({
        msg:'delete api - controller'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPatch,
    usersPost,
    usersDelete
}