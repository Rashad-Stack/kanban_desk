import KanbanDesk from "@/components/kanbanDesk";
import styles from "@/styles/dashboard.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_container}>
        <div className={styles.dashboard_menu}></div>
        <div className={styles.dashboard_panel}>
          <KanbanDesk />
        </div>
      </div>
    </div>
  );
}
