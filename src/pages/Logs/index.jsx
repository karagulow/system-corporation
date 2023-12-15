import { useEffect, useState } from 'react';

import styles from './Logs.module.scss';
import logsData from '../../assets/data/logs.json';

import { Search } from '../../components/Search';
import { LogsItem } from '../../components/LogsItem';

// Search start
const filterLogs = (searchText, listOfLogs) => {
  if (!searchText) {
    return listOfLogs;
  }

  return listOfLogs.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
};
// Search end

// CategorySort start
const sortLogs = (type, data) => {
  if (type.sortProperty === 'name') {
    data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (type.sortProperty === 'check_in') {
    data.sort((a, b) => {
      const nameA = a.check_in.toLowerCase();
      const nameB = b.check_in.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  } else if (type.sortProperty === 'check_out') {
    data.sort((a, b) => {
      const nameA = a.check_out.toLowerCase();
      const nameB = b.check_out.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
};
// CategorySort end

export const Logs = () => {
  // Search start
  const [logsList, setLogsList] = useState(logsData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredLogs = filterLogs(searchTerm, logsData);
      setLogsList(filteredLogs);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);
  // Search end

  // CategorySort start
  const [sortType, setSortType] = useState({
    name: 'По умолчанию',
    sortProperty: 'default',
  });

  const sortList = [
    { name: 'По фио', sortProperty: 'name' },
    { name: 'По дате заезда', sortProperty: 'check_in' },
    { name: 'По дате выезда', sortProperty: 'check_out' },
  ];

  useEffect(() => {
    sortLogs(sortType, logsList);
  });
  // CategorySort end

  return (
    <div className={styles.logs}>
      <div className={styles.logsTop}>
        <h5 className={styles.logsTop__title}>Журнал посещений</h5>
        <div className={styles.logsTop__filter}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.50049 6H8.50049M8.50049 6V4M8.50049 6V8M20.5005 6H12.5005M4.50049 12H14.5005M14.5005 12V10M14.5005 12V14M20.5005 12H18.5005M4.50049 18H10.5005M10.5005 18V16M10.5005 18V20M20.5005 18H14.5005"
              stroke="#131C55"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className={styles.logsTop__filterBtns}>
            {sortList.map((obj, index) => {
              return (
                <button
                  key={index}
                  className={styles.logsTop__filterBtns__item}
                  onClick={() => setSortType(obj)}
                >
                  {obj.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.logsTop__right}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div className={styles.logsContent}>
        <div className={styles.logsContent__table}>
          <ul className={styles.logsContent__tableHead}>
            <li className={styles.logsContent__tableHead__item}>Фио</li>
            <li className={styles.logsContent__tableHead__item}>
              Серия и номер паспорта
            </li>
            <li className={styles.logsContent__tableHead__item}>
              Номер телефона
            </li>
            <li className={styles.logsContent__tableHead__item}>
              VIN-номер авто
            </li>
            <li className={styles.logsContent__tableHead__item}>Модель авто</li>
            <li className={styles.logsContent__tableHead__item}>Цвет авто</li>
            <li className={styles.logsContent__tableHead__item}>Номер авто</li>
            <li className={styles.logsContent__tableHead__item}>
              Время заезда
            </li>
            <li className={styles.logsContent__tableHead__item}>
              Время выезда
            </li>
          </ul>
          <ul className={styles.logsContent__tableData}>
            {logsList.map((log, index) => (
              <LogsItem
                key={index}
                name={log.name}
                passport={log.passport}
                phone={log.phone}
                vin={log.vin}
                car={log.car}
                car_color={log.car_color}
                car_number={log.car_number}
                check_in={log.check_in}
                check_out={log.check_out}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
