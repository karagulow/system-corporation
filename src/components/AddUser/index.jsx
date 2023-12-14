import { IMaskInput } from 'react-imask';

import styles from './AddUser.module.scss';
import { useEffect, useRef } from 'react';

export const AddUser = ({ setAddUserFormOpen }) => {
  const passportMask = '0000 000000';
  const phoneMask = '+{7}(000)000-00-00';

  // const formRef = useRef();

  // useEffect(() => {
  //   const handleClickFormOutside = event => {
  //     if (!event.composedPath().includes(formRef.current)) {
  //       setAddUserFormOpen(false);
  //     }
  //   };

  //   document.body.addEventListener('click', handleClickFormOutside);
  //   return () => {
  //     document.body.removeEventListener('click', handleClickFormOutside);
  //   };
  // });

  return (
    <div className={styles.add_user}>
      <form className={styles.add_userForm}>
        <div
          className={styles.add_userForm__close}
          onClick={() => {
            setAddUserFormOpen(false);
          }}
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.09131 6.70459L20.0913 19.7046M20.0913 6.70459L7.09131 19.7046"
              stroke="#131C55"
              stroke-width="2.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h3 className={styles.add_userForm__title}>Данные о пользователе</h3>
        <div className={styles.add_userForm__data}>
          <div className={styles.add_userForm__dataImg}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 21L19.5 21C20.3284 21 21 20.3284 21 19.5L21 4.5C21 3.67157 20.3284 3 19.5 3L4.5 3C3.67158 3 3 3.67157 3 4.5L3 19.5C3 20.3284 3.67157 21 4.5 21Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M12 16L12 8"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 12L8 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.add_userForm__dataItems}>
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              type="text"
              placeholder="ФИО"
              required
            />
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              mask={passportMask}
              type="text"
              placeholder="Серия и номер паспорта"
              required
            />
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              mask={phoneMask}
              type="text"
              placeholder="Номер телефона"
              required
            />
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              type="text"
              placeholder="Место работы"
              required
            />
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              mask={Date}
              min={new Date()}
              max={new Date(2100, 0, 1)}
              type="text"
              placeholder="Срок действия пропуска"
              required
            />
          </div>
        </div>
        <h3 className={styles.add_userForm__title}>Данные об автомобиле</h3>
        <div className={styles.add_userForm__data}>
          <div className={styles.add_userForm__dataImg}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 21L19.5 21C20.3284 21 21 20.3284 21 19.5L21 4.5C21 3.67157 20.3284 3 19.5 3L4.5 3C3.67158 3 3 3.67157 3 4.5L3 19.5C3 20.3284 3.67157 21 4.5 21Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M12 16L12 8"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 12L8 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.add_userForm__dataItems}>
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              type="text"
              placeholder="VIN номер"
              required
            />
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              type="text"
              placeholder="Марка автомобиля"
              required
            />
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              type="text"
              placeholder="Цвет автомобиля"
              required
            />
            <IMaskInput
              className={styles.add_userForm__dataItems__input}
              type="text"
              placeholder="Номер автомобиля"
              required
            />
          </div>
        </div>
        <button className={styles.add_userForm__btn}>Добавить</button>
      </form>
    </div>
  );
};
