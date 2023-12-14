import styles from './AddUser.module.scss';

export const AddUser = () => {
  return (
    <div className={styles.add_user}>
      <form className={styles.add_userForm}>
        <h3 className={styles.add_userForm__title}>Данные о пользователе</h3>
      </form>
    </div>
  );
};
