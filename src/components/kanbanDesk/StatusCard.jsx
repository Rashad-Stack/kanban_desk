/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import AddTaskBtn from "./AddTaskBtn";
import TaskCard from "./TaskCard";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setStatusId } from "@/features/tasks/tasksSlice";

export default function StatusCard({ title, status, tasks, typeId, accept }) {
  const dispatch = useDispatch();
  const [{ isOver }, listRef] = useDrop({
    drop() {
      dispatch(setStatusId(typeId));
    },

    accept,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <p>
          <b>{title}</b>
        </p>
        <AddTaskBtn status={status} />
      </div>

      <div
        className={`${styles.card_list} ${isOver && styles.card_list_over}`}
        ref={listRef}>
        {tasks.map((task, index) => (
          <TaskCard key={task.id} status={status} todo={task} index={index} />
        ))}
      </div>
    </div>
  );
}
