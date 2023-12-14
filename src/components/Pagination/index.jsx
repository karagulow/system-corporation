import { Link } from 'react-router-dom';

import styles from './Pagination.module.scss';
import { returnPaginationRange } from '../../utils/appUtils';

export const Pagination = ({
  totalPage,
  page,
  limit,
  siblings,
  onPageChange,
}) => {
  let array = returnPaginationRange(totalPage, page, limit, siblings);

  return (
    <ul className={styles.pagination}>
      <li className={styles.paginationLeft}>
        <Link
          className={styles.paginationLeft__link}
          onClick={() => {
            onPageChange('left');
          }}
          href="#"
          aria-label="Previous"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5626 5.56047C13.9531 5.951 13.9531 6.58416 13.5626 6.97468L10.2697 10.2676L13.5626 13.5605C13.9531 13.951 13.9531 14.5842 13.5626 14.9747C13.1721 15.3652 12.5389 15.3652 12.1484 14.9747L8.14836 10.9747C7.75784 10.5842 7.75784 9.951 8.14836 9.56047L12.1484 5.56047C12.5389 5.16995 13.1721 5.16995 13.5626 5.56047Z"
              fill="#4B5563"
            />
          </svg>
        </Link>
      </li>
      {array.map(value => {
        if (value === page) {
          return (
            <li className={styles.paginationItem}>
              <Link className={styles.paginationActive__link} href="#">
                {value}
              </Link>
            </li>
          );
        } else {
          return (
            <li className={styles.paginationItem}>
              <Link
                className={styles.paginationItem__link}
                onClick={() => {
                  onPageChange(value);
                }}
                href="#"
              >
                {value}
              </Link>
            </li>
          );
        }
      })}
      <li className={styles.paginationRight}>
        <Link
          className={styles.paginationRight__link}
          onClick={() => {
            onPageChange('right');
          }}
          href="#"
          aria-label="Next"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.14836 14.9747C7.75784 14.5842 7.75784 13.951 8.14836 13.5605L11.4413 10.2676L8.14836 6.97468C7.75784 6.58416 7.75784 5.951 8.14836 5.56047C8.53889 5.16995 9.17205 5.16995 9.56258 5.56047L13.5626 9.56047C13.9531 9.951 13.9531 10.5842 13.5626 10.9747L9.56258 14.9747C9.17205 15.3652 8.53889 15.3652 8.14836 14.9747Z"
              fill="#4B5563"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};
