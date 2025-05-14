// src/admin/ProductForm.tsx
import React, { useState, useEffect } from 'react';

interface Product {
  _id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  onSubmit: (product: Product) => void;
  initialData?: Product;
}

const ProductForm: React.FC<Props> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<Product>({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', price: 0, description: '', image: '' }); // reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="input" />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} className="input" />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="input" />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="input" />
      <button type="submit" className="btn bg-primary text-white">{initialData ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
