import styles from './MonitoringSystem.module.scss';

export const MonitoringSystem = () => {
  return (
    <div className={styles.monitoring}>
      <div className={styles.monitoringTop}>
        <h5 className={styles.monitoringTop__title}>Система наблюдения</h5>
      </div>
      <div className={styles.monitoringContent}></div>
    </div>
  );
};
