import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { WishlistProvider } from './context/wishlist.context.jsx';
import { CartProvider } from './context/cart.context.jsx';
import { Home, Cart, Shop, Book, Wishlist, Order } from './routes';
import { shopDataLoader } from './routes/Shop/shop.loader.js';
import { bookDataLoader } from './routes/Book/book.loader.js';
import { wishlistLoader } from './routes/Wishlist/wishlist.loader.js'
import { cartDataLoader } from './routes/Cart/cart.loader.js';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    ),
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />,
        loader: cartDataLoader
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
        element: <Wishlist />,
        loader: wishlistLoader
      },
      {
        path: 'order',
        element: <Order />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
