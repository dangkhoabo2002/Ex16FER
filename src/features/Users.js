import { createSlice } from "@reduxjs/toolkit";
import UserData from "../ListOfUsers";
export const userSlice = createSlice({
  name: "users",
  initialState: { value: UserData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
      // Write code for addUser function
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      // Write code for deleteUser fuction
    },
    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
      // Write code for updateUsername function
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
