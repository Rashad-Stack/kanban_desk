import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { tasks } from "@/data/tasks";

const initialState = {
  tasks: [...tasks],
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

      const newTask = {
        id: uuidv4(),
        title: "New task title",
        category: "New task category ",
        status: action.payload,
        date: formattedDate,
      };
      state.tasks.push(newTask);
    },

    editTask(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((job) => job.id !== action.payload);
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, editTask, deleteTask } = tasksSlice.actions;
