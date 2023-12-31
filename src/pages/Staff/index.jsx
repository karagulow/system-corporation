import { useEffect, useState } from 'react';

import styles from './Staff.module.scss';
import staffData from '../../assets/data/staff.json';

import { Search } from '../../components/Search';
import { AddUserBtn } from '../../components/AddUserBtn';
import { StaffItem } from '../../components/StaffItem';
import { AddEmployee } from '../../components/AddEmployee';

const filterStaff = (searchText, listOfStaff) => {
  if (!searchText) {
    return listOfStaff;
  }

  return listOfStaff.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const Staff = () => {
  const [addUserFormOpen, setAddUserFormOpen] = useState(false);

  addUserFormOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  // Search start
  const [staffList, setStaffList] = useState(staffData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredStaff = filterStaff(searchTerm, staffData);
      setStaffList(filteredStaff);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);
  // Search end

  return (
    <div className={styles.staff}>
      <div className={styles.staffTop}>
        <h5 className={styles.staffTop__title}>Сотрудники</h5>
        <div className={styles.staffTop__right}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <AddUserBtn setAddUserFormOpen={setAddUserFormOpen} />
          {addUserFormOpen && (
            <AddEmployee setAddUserFormOpen={setAddUserFormOpen} />
          )}
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
            {staffList.map((person, index) => (
              <StaffItem
                key={index}
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
