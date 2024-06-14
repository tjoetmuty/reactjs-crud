import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Cut Muty",
    email: "cutmute@gmail.com",
  },
  {
    id: 2,
    name: "Muty",
    email: "cutsmuts@gmail.com",
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
        state.push(action.payload)
    }
  }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer