import { useState } from 'react';
import styles from './header.module.css';
import { ThemeSwitcher } from './themeSwitcher';
import { UserControls } from './userControls';
import { Modal } from '../modal/modal';
import { Cart } from '../cart/cart';
import { useUser } from '../../context/user-context';

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My App: Delivery from Restaurants</h1>

      {user && (
        <button
          className={styles.cartButton}
          onClick={() => setIsCartOpen(true)}
        >
          🛒 Корзина
        </button>
      )}

      <ThemeSwitcher />
      <UserControls />

      <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart />
      </Modal>
    </header>
  );
};
