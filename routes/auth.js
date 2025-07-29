
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // تحقق تجريبي
  const { username, password } = req.body;
  if (username === 'hr_specialist' && password === 'password123') {
    return res.json({ token: 'test-jwt-token' });
  }
  res.status(401).json({ message: 'بيانات الدخول غير صحيحة' });
});

module.exports = router;
