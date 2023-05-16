/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import { RxBorderDotted } from "react-icons/rx";
import { GoCommentDiscussion } from "react-icons/go";
import { RiAttachment2 } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "@/features/tasks/tasksSlice";

export default function TaskCard({ todo }) {
  const [activeAction, setActiveAction] = useState(false);
  const [state, setState] = useState({ title: "", category: "" });
  const [isEditing, setIsEditing] = useState(false);
  const {
    id,
    title,
    category,
    date,
    comments,
    share,
    assigned = [],
  } = todo || {};
  const { title: newTitle, category: newCategory } = state || {};

  const dispatch = useDispatch();

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(editTask({ ...state, id }));
    setIsEditing(false);
  };

  const editingHandler = () => {
    setState({ ...state, title, category });
    setIsEditing(true);
    setActiveAction(false);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <form onSubmit={handleSave}>
          {isEditing ? (
            <>
              <input
                required
                name="title"
                value={newTitle}
                type="text"
                onChange={onChangeHandler}
              />
              <input
                required
                name="category"
                type="text"
                value={newCategory}
                onChange={onChangeHandler}
              />
              <button />
            </>
          ) : (
            <>
              <h4>{title}</h4>
              <p>{category}</p>
            </>
          )}
        </form>
        <button onClick={() => setActiveAction(!activeAction)}>
          <RxBorderDotted />
        </button>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_date}>{date}</div>
        {assigned.length > 0 ? (
          <div className={styles.card_img}>
            {assigned.slice(0, 2).map((item, i) => (
              <img key={i} src={item.url} />
            ))}

            <span>+{assigned?.length - assigned.slice(0, 2)?.length}</span>
          </div>
        ) : (
          <div className={styles.card_comments}>
            <div>
              <GoCommentDiscussion />
              {comments}
            </div>
            <div>
              <RiAttachment2 />
              {share}
            </div>
          </div>
        )}
      </div>
      {activeAction && (
        <div className={styles.card_action}>
          <button onClick={editingHandler}>Edit Task</button>
          <button onClick={() => dispatch(deleteTask(id))}>DeleteTask</button>
        </div>
      )}
    </div>
  );
}
