import styles from './LogsItem.module.scss';

export const LogsItem = ({
  name,
  passport,
  phone,
  vin,
  car,
  car_color,
  car_number,
  check_in,
  check_out,
}) => {
  return (
    <li className={styles.logs_item}>
      <ul className={styles.logs_itemList}>
        <li className={styles.logs_itemList__item}>{name}</li>
        <li className={styles.logs_itemList__item}>{passport}</li>
        <li className={styles.logs_itemList__item}>{phone}</li>
        <li className={styles.logs_itemList__item}>{vin}</li>
        <li className={styles.logs_itemList__item}>{car}</li>
        <li className={styles.logs_itemList__item}>{car_color}</li>
        <li className={styles.logs_itemList__item}>{car_number}</li>
        <li className={styles.logs_itemList__item}>{check_in}</li>
        <li className={styles.logs_itemList__item}>{check_out}</li>
      </ul>
    </li>
  );
};
