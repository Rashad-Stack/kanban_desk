import { useSelector } from "react-redux";
import StatusCard from "./StatusCard";
import styles from "./styles.module.scss";
import { AiOutlineFileAdd } from "react-icons/ai";

export default function KanbanDesk() {
  const { tasks } = useSelector((state) => ({ ...state.tasks }));

  return (
    <div className={styles.desk}>
      <div className={styles.desk_header}>
        <AiOutlineFileAdd />
        <h1>Kanban Desk</h1>
      </div>
      <div className={styles.desk_panel}>
        <div className={styles.desk_panel_body}>
          {tasks.map((task) => (
            <StatusCard
              key={task.id}
              status={task.type}
              typeId={task.id}
              accept={task.accept}
              title={task.type}
              tasks={task.todoLists}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
