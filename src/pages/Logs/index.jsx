import styles from './Logs.module.scss';

import logsData from '../../assets/data/logs.json';

import { Search } from '../../components/Search';
import { LogsItem } from '../../components/LogsItem';

export const Logs = () => {
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
            <button className={styles.logsTop__filterBtns__item}>По фио</button>
            <button className={styles.logsTop__filterBtns__item}>
              По дате заезда
            </button>
            <button className={styles.logsTop__filterBtns__item}>
              По дате выезда
            </button>
          </div>
        </div>
        <div className={styles.logsTop__right}>
          <Search />
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
            {logsData.map(log => (
              <LogsItem
                key={log.id}
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
