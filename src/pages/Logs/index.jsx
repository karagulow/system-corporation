import styles from './Logs.module.scss';

import logsData from '../../assets/data/logs.json';

import { Search } from '../../components/Search';
import { LogsItem } from '../../components/LogsItem';

export const Logs = () => {
  return (
    <div className={styles.logs}>
      <div className={styles.logsTop}>
        <h5 className={styles.logsTop__title}>Журнал посещений</h5>
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
