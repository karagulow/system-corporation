import { useEffect, useState } from 'react';

import styles from './Users.module.scss';
import usersData from '../../assets/data/users.json';

import { Search } from '../../components/Search';
import { AddUserBtn } from '../../components/AddUserBtn';
import { UserItem } from '../../components/UserItem';
import { AddUser } from '../../components/AddUser';

const filterUsers = (searchText, listOfUsers) => {
  if (!searchText) {
    return listOfUsers;
  }

  return listOfUsers.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const Users = () => {
  const [addUserFormOpen, setAddUserFormOpen] = useState(false);

  addUserFormOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  // Search start
  const [userList, setUserList] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredUsers = filterUsers(searchTerm, usersData);
      setUserList(filteredUsers);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);
  // Search end

  return (
    <div className={styles.users}>
      <div className={styles.usersTop}>
        <h5 className={styles.usersTop__title}>Пользователи</h5>
        <div className={styles.usersTop__right}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <AddUserBtn setAddUserFormOpen={setAddUserFormOpen} />
          {addUserFormOpen && (
            <AddUser setAddUserFormOpen={setAddUserFormOpen} />
          )}
        </div>
      </div>
      <div className={styles.usersContent}>
        <div className={styles.usersContent__table}>
          <ul className={styles.usersContent__tableHead}>
            <li className={styles.usersContent__tableHead__item}>
              ID пользователя
            </li>
            <li className={styles.usersContent__tableHead__item}>Фио</li>
            <li className={styles.usersContent__tableHead__item}>
              Серия и номер паспорта
            </li>
            <li className={styles.usersContent__tableHead__item}>
              Номер телефона
            </li>
            <li className={styles.usersContent__tableHead__item}>
              VIN-номер авто
            </li>
            <li className={styles.usersContent__tableHead__item}>
              Модель авто
            </li>
            <li className={styles.usersContent__tableHead__item}>Цвет авто</li>
            <li className={styles.usersContent__tableHead__item}>Номер авто</li>
            <li className={styles.usersContent__tableHead__item}>
              Редактировать
            </li>
          </ul>
          <ul className={styles.usersContent__tableData}>
            {userList.map((user, index) => (
              <UserItem
                key={index}
                id={user.id}
                name={user.name}
                passport={user.passport}
                phone={user.phone}
                vin={user.vin}
                car={user.car}
                car_color={user.car_color}
                car_number={user.car_number}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
