import { useSelector } from "react-redux";
import StatusCard from "./StatusCard";
import TaskCard from "./TaskCard";
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
          <StatusCard title="To do" status="new" />
          {tasks.map((todo, i) => {
            if (todo?.status === "new") return <TaskCard key={i} todo={todo} />;
          })}
        </div>

        <div className={styles.desk_panel_body}>
          <StatusCard title="In progress" status="progress" />
          {tasks.map((todo, i) => {
            if (todo?.status === "progress")
              return <TaskCard key={i} todo={todo} />;
          })}
        </div>
        <div className={styles.desk_panel_body}>
          <StatusCard title="Done" status="done" />
          {tasks.map((todo, i) => {
            if (todo?.status === "done")
              return <TaskCard key={i} todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
}
