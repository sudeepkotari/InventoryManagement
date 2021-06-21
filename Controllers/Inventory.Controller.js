const User = require('../Models/User.model')
const mongoose = require('mongoose');
const { findByIdAndUpdate } = require('../Models/User.model');
module.exports = {
    getStores : async(req, res, next) => {
        try {
            const result = await User.find({},{password:0})
            res.send(result);
            
        } catch (error) {
            next(error)
        }
    },
    getBookByStore : async (req, res, next) => {
        try {
          const id = req.params.store;
          const result = await User.findById(id, {books: 1,_id: 0})
          res.send(result);
        } catch (error) {
            next(error)
        }
    },
    addBookToStore : async (req, res, next) => {
        try {
            const book = req.body;
            const id = req.body.id;
            const result = await User.findByIdAndUpdate( id, { $push: { books: book } }, {new: true, select: { password: 0}})
            res.send(result);
        } catch (error) {
            next(error)
        }
    },
    removeBook: async (req, res, next) => {
        try {
            const id = req.body.id;
            const bookid = req.body.bookId;
            await User.findByIdAndUpdate(
              id,
              { $pull: { books: { _id: bookid } } },
              { new: true }
            );
            res.send("book removed")
        } catch (error) {
            next(error)
        }
    },
    updateBook: async (req, res, next) => {
        try {
            const id = req.body.id;
            const bookid = req.body.bookId;
            result = await User.findOneAndUpdate({"_id": id, "books._id": bookid },
            {
                "$set":{
                    "title" : req.body.title
                }
            });
            res.send(result);
        } catch (error) {
            next(error)
        }
    }

}