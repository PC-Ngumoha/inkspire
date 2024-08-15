import { useState } from 'react';
import { GiQuillInk, GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import styles from './Navbar.module.scss';

const routes = {
  pages: [
    {
      id: 1,
      name: 'Home',
      path: '#'
    },
    {
      id: 2,
      name: 'Shop',
      path: '#'
    }
  ],
  preferences: [
    {
      id: 3,
      name: 'Wishlist',
      path: '#'
    },
    {
      id: 4,
      name: <GiShoppingBag />,
      path: '#'
    }
  ]
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return  !open ? (
    <nav className={ styles.navbar } role="navigation" aria-label="main navigation">
      <ul className={ styles.pages }>
        {
          routes.pages.map((item) => (
            <li key={ item.id }>
              <a href={ item.path }> { item.name }</a>
            </li>
          ))
        }
      </ul>
      <span className={ styles.brand }>
        <GiQuillInk /> Inkspire
      </span>
      <ul className={ styles.preferences }>
        {
          routes.preferences.map((item) => {
            if (item.id === 4) {
              return (
                <li key={ item.id }>
                  <a href={ item.path }> { item.name } 0 </a>
                </li>
              )
            } else {
              return (
                <li key={ item.id }>
                  <a href={ item.path }> { item.name }</a>
                </li>
              )
            }
          })
        }
      </ul>
      <GiHamburgerMenu
        className={ styles.openDropdown }
        onClick={ () => setOpen(true) }
      />
    </nav>
  ) : (
    <div className={ styles.dropdown }>
      <IoClose
        onClick={ () => setOpen(false) }
        className={ styles.closeDropdown }
      />
      <ul className={ styles.pages }>
        {
          routes.pages.map((item) => (
            <li key={ item.id }>
              <a href={ item.path }> { item.name }</a>
            </li>
          ))
        }
      </ul>
      <ul className={ styles.preferences }>
        {
          routes.preferences.map((item) => {
            if (item.id === 4) {
              return (
                <li key={ item.id }>
                  <a href={ item.path }> { item.name } 0 </a>
                </li>
              )
            } else {
              return (
                <li key={ item.id }>
                  <a href={ item.path }> { item.name }</a>
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  );
}

export default Navbar;
