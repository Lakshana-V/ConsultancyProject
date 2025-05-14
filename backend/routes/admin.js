import express from 'express';
import Product from '../models/Product.js'; // Import the Product model

const router = express.Router();

// Admin login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (username === 'Admin' && password === 'Admin@123') {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products); // Send the products as a JSON response
  } catch (err) {
    console.error('Error fetching products:', err); // Log the error
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});
router.delete('/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err.message });
  }
});
router.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err.message });
  }
});

export default router;