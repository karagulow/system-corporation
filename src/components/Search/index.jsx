import styles from './Search.module.scss';

export const Search = () => {
  return (
    <label for="search" className={styles.search}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.396 16.8662L21 20.9996"
          stroke="#131C55"
          stroke-width="2.66669"
          stroke-linecap="round"
        />
        <path
          d="M11.0001 19.0001C15.4184 19.0001 19.0001 15.4184 19.0001 11.0001C19.0001 6.58176 15.4184 3 11.0001 3C6.58176 3 3 6.58176 3 11.0001C3 15.4184 6.58176 19.0001 11.0001 19.0001Z"
          stroke="#131C55"
          stroke-width="2.66669"
        />
      </svg>
      <input type="text" id="search" placeholder="Поиск" />
    </label>
  );
};
