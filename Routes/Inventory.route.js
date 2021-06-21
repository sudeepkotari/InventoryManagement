const express = require('express')
const router = express.Router();
const InvenotryController = require('../Controllers/Inventory.Controller')

router.get('/get-stores',InvenotryController.getStores);
router.get('/get-book-by-store/:store', InvenotryController.getBookByStore);
router.put('/add-book-by-store', InvenotryController.addBookToStore);
router.patch("/remove-book", InvenotryController.removeBook);
router.patch("/update-book", InvenotryController.updateBook);

module.exports = router