import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")  || '[]'),
  importentTasks:  JSON.parse(localStorage.getItem("improtent") || '[]' ),
  completedtasks: JSON.parse(localStorage.getItem("completed") || '[]'),
  updateHolder: [],
  searched:[]
};

export const UserstaskSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push({ ...payload });
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    addImprotent: (state, { payload }) => {
      const ExistOrNot = state.importentTasks.some((e) => e.id === payload.id);
      if (!ExistOrNot) {
        const updated = state.users.map((e) => {
          if (e.id === payload.id) {
            return { ...e, improtent: !e.improtent };
          } else {
            return e;
          }
        });
        state.users = updated;
        if (payload.completed === false) {
          state.importentTasks.push({
            ...payload,
            improtent: !payload.improtent,
          });
        } else {
          const updated = state.completedtasks.map((e) => {
            if (e.id === payload.id) {
              return { ...e, improtent: !e.improtent };
            } else {
              return e;
            }
          });
          state.completedtasks = updated;
        }
      } else {
        const updated = state.users.map((e) => {
          if (e.id === payload.id && e.improtent === true) {
            return { ...e, improtent: !e.improtent };
          } else {
            return e;
          }
        });

        state.users = updated;

        const up = state.users.filter((e) => e.improtent === true);
        state.importentTasks = up;
      }
      localStorage.setItem("improtent", JSON.stringify(state.importentTasks));
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("completed", JSON.stringify(state.completedtasks));
    },
    addCompleted: (state, { payload }) => {
      if (payload.completed === false) {
        const updated = state.users.map((e) => {
          if (e.id === payload.id) {
            return { ...e, completed: !payload.completed };
          } else {
            return e;
          }
        });
        const fil = updated.filter((e) => e.completed === false);
        const fillIm = updated.filter(
          (e) => e.completed === false && e.improtent === true
        );
        state.users = fil;

        state.importentTasks = fillIm;

        state.completedtasks.push({
          ...payload,
          completed: !payload.completed,
        });
      } else {
        const updated = state.completedtasks.filter((e) => e.id !== payload.id);
        state.completedtasks = updated;

        state.users.push({ ...payload, completed: !payload.completed });
        if (payload.improtent) {
          state.importentTasks.push(payload);
        }
      }
      localStorage.setItem("improtent", JSON.stringify(state.importentTasks));
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("completed", JSON.stringify(state.completedtasks));
    },
    updateTask: (state, { payload }) => {
      const updateFul = (e, pay) => {
        const update = e.map((e) => {
          if (e.id === pay.id) {
            return { ...e, ...pay };
          } else {
            return e;
          }
        });
        return update;
      };

      state.users = updateFul(state.users, payload);
      state.completedtasks = updateFul(state.completedtasks, payload);
      state.importentTasks = updateFul(state.importentTasks, payload);
      localStorage.setItem("improtent", JSON.stringify(state.importentTasks));
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("completed", JSON.stringify(state.completedtasks));
    },
    setUpdateHolder: (state, { payload }) => {
      state.updateHolder = payload;
    },
    deleteTask: (state, { payload }) => {
      const update = state.users.filter((e:any) => e.id !== payload.id);
      state.users = update;
      const upd = state.completedtasks.filter((e:any) => e.id !== payload.id);
      state.completedtasks = upd;
      const upda = state.importentTasks.filter((e:any) => e.id !== payload.id);
      state.importentTasks = upda;
      const up = state.searched.filter((e:any) => e.id !== payload.id)
      state.searched = up
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    setsearch: (state,{payload}) => {
      state.searched =  payload
    },
  },
});

export const {
  addUser,
  addImprotent,
  addCompleted,
  updateTask,
  setUpdateHolder,
  deleteTask,
  setsearch,
} = UserstaskSlice.actions;
export const userData = (state) => state.users.users;
export const importentTasks = (state) => state.users.importentTasks;
export const complatedTasks = (state) => state.users.completedtasks;
export const updateHolder = (state) => state.users.updateHolder;
export const searched = (state) => state.users.searched;

export default UserstaskSlice.reducer;
