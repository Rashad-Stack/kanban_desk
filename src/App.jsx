import styles from "@/styles/app.module.scss";
import Dashboard from "@/pages/Dashboard";

function App() {
  return (
    <div className={styles.kanban_desk}>
      <Dashboard />
    </div>
  );
}

export default App;
