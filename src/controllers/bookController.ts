import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export const getAllBooks = (req: Request, res: Response): void => {
  try {
    const { keyword } = req.params;
    const books = bookService.getAllBooks(keyword);
    if (books.length !== 0) {
      res.status(200).json({ message: 'Books retrieved', data: books });
    } else {
      res.status(200).json({ message: 'No books found', data: books });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books' });
  }
};

export const addBook = (req: Request, res: Response): void => {
  try {
    const newBook = req.body;
    const createdBook = bookService.addBook(newBook);
    res.status(201).json({ message: 'Book added', data: createdBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book' });
  }
};

export const updateBook = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedBook = bookService.updateBook(id, updatedData);
    if (updatedBook) {
      res.status(200).json({
        message: 'Book updated',
        data: updatedBook,
      });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
};

export const deleteBook = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const success = bookService.deleteBook(id);
    if (success) {
      res.status(200).json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book' });
  }
};

export const borrowBook = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const borrowerId = req.body.borrowerId;
    const result = bookService.borrowBook(id, borrowerId);
    if (result) {
      res.status(200).json({ message: 'Book borrowed', data: result });
    } else {
      res.status(404).json({
        message: 'Book not found or already borrowed',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error borrowing book' });
  }
};

export const returnBook = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const result = bookService.returnBook(id);
    if (result) {
      res.status(200).json({ message: 'Book returned' });
    } else {
      res.status(404).json({
        message: 'Book not found or not currently borrowed',
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error returning book' });
  }
};

export const getRecommendations = (req: Request, res: Response): void => {
  try {
    const recommendations = bookService.getRecommendations();
    res.status(200).json({
      message: 'Recommendations retrieved',
      data: recommendations,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendations' });
  }
};
