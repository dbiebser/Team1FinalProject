import express from 'express';
import { Show } from '../models/showModel.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.image ||
      !request.body.rating.rate ||
      !request.body.rating.count
    ) {
      return response.status(400).send({
        message: 'Send all required fields',
      });
    }
    const newShow = {
      title: request.body.title,
      description: request.body.description,
      image: request.body.image,
      rate: request.body.rating.rate,
      count: request.body.rating.count
    };

    const show = await Show.create(newShow);

    return response.status(201).send(show);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const shows = await Show.find({});

    return response.status(200).json({
      count: shows.length,
      data: shows,
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

    const show = await Show.findById(id);

    return response.status(200).json(show);
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
      !request.body.description ||
      !request.body.image ||
      !request.body.rating.rate ||
      !request.body.rating.count
    ) {
      return response.status(400).send({
        message: 'Send all required fields',
      });
    }

    const { id } = request.params;

    const result = await Show.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Show not found' });
    }

    return response.status(200).send({ message: 'Show updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Show.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Show not found' });
    }

    return response.status(200).send({ message: 'Show deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;