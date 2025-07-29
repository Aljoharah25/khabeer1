
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ type: 'ترقية', status: 'قيد المراجعة' }]);
});

module.exports = router;
