import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { Home, Cart, Shop, Book, Wishlist } from './routes';
import { shopDataLoader } from './routes/Shop/shop.util.js';
import { bookDataLoader } from './routes/Book/book.util.js';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'shop',
        element: <Shop />,
        loader: shopDataLoader
      },
      {
        path: 'book/:bookId',
        element: <Book />,
        loader: bookDataLoader
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
