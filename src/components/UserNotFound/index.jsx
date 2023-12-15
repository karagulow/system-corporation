import styles from './UserNotFound.module.scss';
import avatar from '../../assets/img/avatar-not-found.jpg';
import car from '../../assets/img/car-not-found.jpg';

export const UserNotFound = ({ setUserNotFoundOpen }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBlock}>
        <div
          className={styles.cardBlock__close}
          onClick={() => {
            setUserNotFoundOpen(false);
          }}
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.09131 6.70459L20.0913 19.7046M20.0913 6.70459L7.09131 19.7046"
              stroke="#131C55"
              stroke-width="2.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className={styles.cardBlock__warning}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7955 15.6062H11.8065M11.7955 6.80318V11.2047M11.7955 21.1082C17.2651 21.1082 21.699 16.6742 21.699 11.2047C21.699 5.73519 17.2651 1.30127 11.7955 1.30127C6.32601 1.30127 1.89209 5.73519 1.89209 11.2047C1.89209 16.6742 6.32601 21.1082 11.7955 21.1082Z"
              stroke="#991B1B"
              stroke-width="2.20076"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3 className={styles.cardBlock__warningTitle}>
            Пользователь не найден!
          </h3>
        </div>
        <h3 className={styles.cardBlock__title}>Данные о пользователе</h3>
        <div className={styles.cardBlock__data}>
          <div className={styles.cardBlock__dataImg}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.cardBlock__dataItems}>
            <input
              className={styles.cardBlock__dataItems__input}
              value="Петросян Роман Сергеевич"
              type="text"
              readOnly
            />
            <input
              className={styles.cardBlock__dataItems__input}
              value="+7 989 423 23 23"
              type="text"
              readOnly
            />
            <input
              className={styles.cardBlock__dataItems__input}
              value="ДГТУ, пл. Гагарина 1"
              type="text"
              readOnly
            />
            <input
              className={styles.cardBlock__dataItems__input}
              value="12.12.2024"
              type="text"
              readOnly
            />
          </div>
        </div>
        <h3 className={styles.cardBlock__title}>Данные об автомобиле</h3>
        <div className={styles.cardBlock__data}>
          <div className={styles.cardBlock__dataImg}>
            <img src={car} alt="car" />
          </div>
          <div className={styles.cardBlock__dataItems}>
            <input
              className={styles.cardBlock__dataItems__input}
              value="Z94CB41AACR123456"
              type="text"
              readOnly
            />
            <input
              className={styles.cardBlock__dataItems__input}
              value="Kia Rio"
              type="text"
              readOnly
            />
            <input
              className={styles.cardBlock__dataItems__input}
              value="Черный"
              type="text"
              readOnly
            />
            <input
              className={styles.cardBlock__dataItems__input}
              value="А777ВС61"
              type="text"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};
