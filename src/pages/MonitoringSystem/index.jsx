import styles from './MonitoringSystem.module.scss';

export const MonitoringSystem = () => {
  return (
    <div className={styles.monitoring}>
      <h5 className={styles.monitoringTitle}>Система наблюдения</h5>
      <div className={styles.monitoringContent}></div>
    </div>
  );
};
