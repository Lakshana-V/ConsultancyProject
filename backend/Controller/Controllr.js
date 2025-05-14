import Quote from '../models/Quote.js';

export const add = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newQuote = new Quote({ name, email, phone, message });
    await newQuote.save();

    console.log('✅ Quote saved to MongoDB:', newQuote);

    res.status(201).json({ message: 'Quote saved successfully' });
  } catch (error) {
    console.error('❌ Error saving quote:', error.message || error);

    // ✅ Send proper error response
    res.status(500).json({ error: 'Failed to save quote. Please try again later.' });
  }
};
