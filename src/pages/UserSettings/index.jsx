import styles from './UserSettings.module.scss';

export const UserSettings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.settingsTop}>
        <h5 className={styles.settingsTop__title}>Настройки</h5>
      </div>
      <div className={styles.settingsContent}>
        <form className={styles.settingsContent__form}>
          <input
            type="text"
            value="Ivan"
            placeholder="Логин"
            className={styles.settingsContent__formInput}
          />
          <button type="button" className={styles.settingsContent__formBtn}>
            Изменить
          </button>
        </form>

        <form className={styles.settingsContent__form}>
          <input
            type="password"
            value="ivanushka"
            placeholder="Пароль"
            className={styles.settingsContent__formInput}
          />
          <button type="button" className={styles.settingsContent__formBtn}>
            Изменить
          </button>
        </form>

        <form className={styles.settingsContent__form}>
          <input
            type="text"
            value="ivan@mail.ru"
            placeholder="Электронная почта"
            className={styles.settingsContent__formInput}
          />
          <button type="button" className={styles.settingsContent__formBtn}>
            Изменить
          </button>
        </form>

        <form className={styles.settingsContent__form}>
          <input
            type="text"
            value="Выбор устройства (добавление новой камеры)"
            placeholder="Выбор устройства (добавление новой камеры)"
            className={styles.settingsContent__formInput}
          />
          <button type="button" className={styles.settingsContent__formBtn}>
            Добавить
          </button>
        </form>

        <form className={styles.settingsContent__form}>
          <input
            type="text"
            value="Ссылка на базу данных"
            placeholder="Ссылка на базу данных"
            className={styles.settingsContent__formInput}
          />
          <button type="button" className={styles.settingsContent__formBtn}>
            Перенести
          </button>
        </form>
      </div>
    </div>
  );
};
