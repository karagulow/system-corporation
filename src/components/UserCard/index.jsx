import styles from './UserCard.module.scss';
import avatar from '../../assets/img/man.jpg';
import car from '../../assets/img/car.jpg';

export const UserCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Данные о пользователе</h3>
      <div className={styles.cardData}>
        <div className={styles.cardData__img}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.cardData__items}>
          <input
            className={styles.cardData__itemsInput}
            value="Петросян Роман Сергеевич"
            type="text"
            readOnly
          />
          <input
            className={styles.cardData__itemsInput}
            value="+7 989 423 23 23"
            type="text"
            readOnly
          />
          <input
            className={styles.cardData__itemsInput}
            value="ДГТУ, пл. Гагарина 1"
            type="text"
            readOnly
          />
          <input
            className={styles.cardData__itemsInput}
            value="12.12.2024"
            type="text"
            readOnly
          />
        </div>
      </div>
      <h3 className={styles.cardTitle}>Данные об автомобиле</h3>
      <div className={styles.cardData}>
        <div className={styles.cardData__img}>
          <img src={car} alt="car" />
        </div>
        <div className={styles.cardData__items}>
          <input
            className={styles.cardData__itemsInput}
            value="Z94CB41AACR123456"
            type="text"
            readOnly
          />
          <input
            className={styles.cardData__itemsInput}
            value="Kia Rio"
            type="text"
            readOnly
          />
          <input
            className={styles.cardData__itemsInput}
            value="Черный"
            type="text"
            readOnly
          />
          <input
            className={styles.cardData__itemsInput}
            value="А777ВС61"
            type="text"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
