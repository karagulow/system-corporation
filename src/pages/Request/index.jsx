import { useNavigate } from 'react-router-dom';

import styles from './Request.module.scss';

export const Request = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.request}>
      <div className={styles.requestBack}>
        <button
          className={styles.requestBack__btn}
          onClick={() => {
            navigate(-1);
            window.scrollTo(0, 0);
          }}
        >
          Назад
        </button>
      </div>
      <form className={styles.requestForm}>
        <h3 className={styles.requestForm__title}>Заявка на сотрудничество</h3>
        <div className={styles.requestForm__col}>
          <textarea
            className={styles.requestForm__colBig_input}
            placeholder="Опишите для чего мы вам необходимы"
          ></textarea>
          <input
            className={styles.requestForm__colInput}
            type="text"
            placeholder="Номер телефона или почта для связи"
          />
          <input
            className={styles.requestForm__colInput}
            type="text"
            placeholder="Как к вам обращаться?"
          />
        </div>
        <button type="button" className={styles.requestForm__btn}>
          Оставить заявку
        </button>
      </form>
    </div>
  );
};
