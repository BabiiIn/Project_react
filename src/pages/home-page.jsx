import { Link } from 'react-router-dom';
import styles from './home-page.module.css';

export const HomePage = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Добро пожаловать!</h1>
      <p className={styles.subtitle}>
        Выберите ресторан, изучите меню и оставьте отзыв.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>🍽️ Рестораны</h2>
          <p>Посмотрите список ресторанов и их меню.</p>
          <Link to="/restaurants" className={styles.link}>
            Перейти к ресторанам
          </Link>
        </div>

        <div className={styles.card}>
          <h2>🥗 Блюда</h2>
          <p>Откройте страницу блюда и добавьте его в корзину.</p>
          <Link to="/dish/1" className={styles.link}>
            Перейти к блюду #1
          </Link>
        </div>

        <div className={styles.card}>
          <h2>📝 Отзывы</h2>
          <p>Читайте отзывы других пользователей и оставляйте свои.</p>
          <Link to="/restaurants/1/reviews" className={styles.link}>
            Перейти к отзывам ресторана #1
          </Link>
        </div>
      </div>
    </section>
  );
};
