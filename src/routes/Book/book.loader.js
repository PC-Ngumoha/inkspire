import BooksData from '../../utils/books.fixtures.json';

export async function bookDataLoader({ params }) {
  return BooksData[ params.bookId - 1 ];
}