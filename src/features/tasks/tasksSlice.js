import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import tasks from "@/data/tasks";

const initialState = {
  tasks: [...tasks],
  statusId: undefined,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const date = new Date("2023-05-16");
      const options = { day: "numeric", month: "short", year: "numeric" };
      const formattedDate = date
        .toLocaleDateString("en-US", options)
        .replace(",", "");

      const taskType = state.tasks.find((task) => task.type === action.payload);

      if (taskType) {
        taskType.todoLists.push({
          id: uuidv4(),
          title: "New task title",
          category: "New task category ",
          date: formattedDate,
          comments: 0,
          share: 0,
          assigned: [],
        });
      } else {
        state.tasks.push({
          id: uuidv4(),
          type: action.payload.type,
          accept: ["pending", "progress", "completed"],
          todoLists: [
            {
              id: uuidv4(),
              title: "New task title",
              category: "New task category ",
              date: formattedDate,
              comments: 0,
              share: 0,
              assigned: [],
            },
          ],
        });
      }
    },

    editTask(state, action) {
      const { state: actionState, type, todoId } = action.payload;

      const taskIndex = state.tasks.findIndex((task) => task.type === type);

      const todoIndex = state.tasks[taskIndex].todoLists.findIndex(
        (todo) => todo.id === todoId
      );

      if (taskIndex !== -1 && todoIndex !== -1) {
        state.tasks[taskIndex].todoLists[todoIndex] = {
          ...state.tasks[taskIndex].todoLists[todoIndex],
          ...actionState,
        };
      }
    },

    deleteTask(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.type === action.payload.type
      );
      state.tasks[index].todoLists = state.tasks[index].todoLists.filter(
        (todo) => todo.id !== action.payload.todoId
      );
    },
    setStatusId(state, action) {
      state.statusId = action.payload;
    },
    setDndOrder(state, action) {
      const { item, type } = action.payload;
      const dragIndex = state.tasks.findIndex((task) => task.type === type);
      const dropIndex = state.tasks.findIndex(
        (task) => task.id === state.statusId
      );

      if (dragIndex !== -1) {
        state.tasks[dragIndex].todoLists = state.tasks[
          dragIndex
        ].todoLists.filter((todo) => todo.id !== item.id);
      }
      if (dropIndex !== -1) {
        state.tasks[dropIndex].todoLists.push(item);
      }
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, editTask, deleteTask, setStatusId, setDndOrder } =
  tasksSlice.actions;
