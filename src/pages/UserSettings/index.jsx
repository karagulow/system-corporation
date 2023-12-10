import styles from './UserSettings.module.scss';

export const UserSettings = () => {
  return (
    <div className={styles.settings}>
      <h5 className={styles.settingsTitle}>Настройки</h5>
      <div className={styles.settingsContent}>
        <form className={styles.settingsContent__form}>
          <input
            type="text"
            value="Ranuka"
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
            value="Ranuka123"
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
            value="qwerty123@mail.ru"
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
