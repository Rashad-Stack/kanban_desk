/* eslint-disable react/prop-types */
import AddTaskBtn from "./AddTaskBtn";
import styles from "./styles.module.scss";

export default function StatusCard({ title, status }) {
  return (
    <div className={styles.status_card}>
      <p>
        <b>{title}</b>
      </p>
      <AddTaskBtn status={status} />
    </div>
  );
}
