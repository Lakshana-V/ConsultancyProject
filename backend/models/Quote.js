import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
}, {
  timestamps: true
});

const Quote = mongoose.model('Quote1', quoteSchema);

export default Quote;
