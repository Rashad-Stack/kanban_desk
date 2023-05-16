/* eslint-disable react/prop-types */
import { addTask } from "@/features/tasks/tasksSlice";
import styles from "./styles.module.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
export default function AddTaskBtn({ status }) {
  const dispatch = useDispatch();
  return (
    <button
      className={styles.add_btn}
      onClick={() => dispatch(addTask(status))}>
      <IoIosAddCircleOutline />
      <span>Add new Task</span>
    </button>
  );
}
