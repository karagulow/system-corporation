import styles from './Staff.module.scss';
import staffData from '../../assets/data/staff.json';

import { Search } from '../../components/Search';
import { AddUserBtn } from '../../components/AddUserBtn';
import { StaffItem } from '../../components/StaffItem';

export const Staff = () => {
  return (
    <div className={styles.staff}>
      <div className={styles.staffTop}>
        <h5 className={styles.staffTop__title}>Сотрудники</h5>
        <div className={styles.staffTop__right}>
          <Search />
          <AddUserBtn />
        </div>
      </div>
      <div className={styles.staffContent}>
        <div className={styles.staffContent__table}>
          <ul className={styles.staffContent__tableHead}>
            <li className={styles.staffContent__tableHead__item}>
              ID пользователя
            </li>
            <li className={styles.staffContent__tableHead__item}>Фио</li>
            <li className={styles.staffContent__tableHead__item}>
              Серия и номер паспорта
            </li>
            <li className={styles.staffContent__tableHead__item}>
              Номер телефона
            </li>
            <li className={styles.staffContent__tableHead__item}>Должность</li>
            <li className={styles.staffContent__tableHead__item}>
              График работы
            </li>
            <li className={styles.staffContent__tableHead__item}>
              Редактировать
            </li>
          </ul>
          <ul className={styles.staffContent__tableData}>
            {staffData.map(person => (
              <StaffItem
                key={person.id}
                id={person.id}
                name={person.name}
                passport={person.passport}
                phone={person.phone}
                post={person.post}
                schedule={person.schedule}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
