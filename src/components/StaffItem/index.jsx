import styles from './StaffItem.module.scss';

export const StaffItem = ({ id, name, passport, phone, post, schedule }) => {
  return (
    <li className={styles.staff_item}>
      <ul className={styles.staff_itemList}>
        <li className={styles.staff_itemList__item}>#{id}</li>
        <li className={styles.staff_itemList__item}>{name}</li>
        <li className={styles.staff_itemList__item}>{passport}</li>
        <li className={styles.staff_itemList__item}>{phone}</li>
        <li className={styles.staff_itemList__item}>{post}</li>
        <li className={styles.staff_itemList__item}>{schedule}</li>
        <li className={styles.staff_itemList__edit}>
          <div className={styles.staff_itemList__editIcon}>
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.77783 5H3.77783H19.7778"
                stroke="#F87171"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.77783 5V3C6.77783 2.46957 6.98855 1.96086 7.36362 1.58579C7.73869 1.21071 8.2474 1 8.77783 1H12.7778C13.3083 1 13.817 1.21071 14.192 1.58579C14.5671 1.96086 14.7778 2.46957 14.7778 3V5M17.7778 5V19C17.7778 19.5304 17.5671 20.0391 17.192 20.4142C16.817 20.7893 16.3083 21 15.7778 21H5.77783C5.2474 21 4.73869 20.7893 4.36362 20.4142C3.98855 20.0391 3.77783 19.5304 3.77783 19V5H17.7778Z"
                stroke="#F87171"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.77783 10V16"
                stroke="#F87171"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7778 10V16"
                stroke="#F87171"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.staff_itemList__editIcon}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7778 18.5605H19.7778"
                stroke="#4256D0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.2778 2.06077C15.6757 1.66295 16.2152 1.43945 16.7778 1.43945C17.0564 1.43945 17.3323 1.49432 17.5896 1.60093C17.847 1.70754 18.0808 1.86379 18.2778 2.06077C18.4748 2.25776 18.6311 2.49161 18.7377 2.74898C18.8443 3.00635 18.8992 3.2822 18.8992 3.56077C18.8992 3.83935 18.8443 4.1152 18.7377 4.37257C18.6311 4.62994 18.4748 4.86379 18.2778 5.06077L5.77783 17.5608L1.77783 18.5608L2.77783 14.5608L15.2778 2.06077Z"
                stroke="#4256D0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
      </ul>
    </li>
  );
};
