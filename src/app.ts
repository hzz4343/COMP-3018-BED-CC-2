import express, { Express, Request, Response } from 'express';
import bookRoutes from './routes/bookRoutes';

const app: Express = express();
app.use(express.json());

/**
 * Mount the book routes on /api/v1/books
 */
app.use('/api/v1/books', bookRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

export default app;
