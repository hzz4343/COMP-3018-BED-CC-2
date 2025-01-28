export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  isBorrowed: boolean;
  borrowerId?: string;
  dueDate?: string;
}
