import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: String,
    description: String,
    image: String,
  },
  { collection: 'products' } // Explicitly specify the collection name
);

export default mongoose.model('Product', productSchema);