import express from 'express';
import { Product } from '../models/productModel.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.price ||
      !request.body.description ||
      !request.body.image ||
      !request.body.category ||
      !request.body.rate ||
      !request.body.count
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, price, description',
      });
    }
    const newProduct = {
      title: request.body.title,
      price: request.body.price,
      description: request.body.description,
      image: request.body.image,
      category: request.body.category,
      rate: request.body.rate,
      count: request.body.count
    };

    const product = await Product.create(newProduct);

    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const products = await Product.find({});

    return response.status(200).json({
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const product = await Product.findById(id);

    return response.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.price ||
      !request.body.description ||
      !request.body.image ||
      !request.body.category ||
      !request.body.rate ||
      !request.body.count
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, price, description',
      });
    }

    const { id } = request.params;

    const result = await Product.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Product.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;