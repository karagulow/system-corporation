import { useState } from 'react';

import styles from './MonitoringSystem.module.scss';

import camera from '../../assets/img/camera-monitoring.png';
import { Pagination } from '../../components/Pagination';
import { UserCard } from '../../components/UserCard';
import { UserNotFound } from '../../components/UserNotFound';

export const MonitoringSystem = () => {
  const [page, setPage] = useState(1);
  const limit = 4;

  const arr = [...Array(1)];

  const totalPage = Math.ceil(arr.length / limit);

  // const getCameras = function (page, limit) {
  //   let array = [];
  //   for (let i = (page - 1) * limit; i < page * limit; i++) {
  //     array.push(arr[i]);
  //   }

  //   return array;
  // };

  function handlePageChange(value) {
    if (value === '... ') {
      setPage(1);
    } else if (value === 'left') {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === 'right') {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === ' ...') {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  const [isHovered, setHovered] = useState(false);
  const [userNotFoundOpen, setUserNotFoundOpen] = useState(false);

  return (
    <div className={styles.monitoring}>
      <div className={styles.monitoringTop}>
        <h5 className={styles.monitoringTop__title}>Система наблюдения</h5>
      </div>
      <div className={styles.monitoringContent}>
        {userNotFoundOpen && (
          <UserNotFound setUserNotFoundOpen={setUserNotFoundOpen} />
        )}
        <div className={styles.monitoringContent__camera}>
          {arr.map(() => {
            return (
              <div
                className={styles.monitoringContent__cameraItem}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {isHovered && <UserCard />}
                <img src={camera} alt="camera" />
              </div>
            );
          })}
        </div>
        <Pagination
          totalPage={totalPage}
          page={page}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
