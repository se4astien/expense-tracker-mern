const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

// Route for GET and POST
router.route('/').get(getTransactions).post(addTransaction);

// Route for DELETE
router.route('/:id').delete(deleteTransaction);

module.exports = router;
