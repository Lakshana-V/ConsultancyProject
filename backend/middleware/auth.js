import express from 'express';

const router = express.Router();

// Hardcoded admin credentials
const hardcodedAdmin = {
  name: 'Admin',
  password: 'Admin@123',
};

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    // Compare with hardcoded credentials
    if (name === hardcodedAdmin.name && password === hardcodedAdmin.password) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;