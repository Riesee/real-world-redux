import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // server
    userInfo: {
      name: "Hilmi",
      email: "hilmi.ozyrt@gmail.com",
    },
    pending: null,
    error: false,
  },

  // server yokken
  // name: "Hilmi",
  // email: "hilmi.ozyrt@gmail.com",
  reducers: {
    // THUNKTAN ÖNCE
    // updateStart: (state) => {
    //   state.pending = true;
    // },
    // updateSuccess: (state, action) => {
    //   state.pending = false;
    //   state.userInfo = action.payload;
    // },
    // updateError: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
    // update: (state, action) => {
    //     state.name = action.payload.name;
    //     state.email = action.payload.email;
    // },
    // remove: (state) => (state = {}),
    // addHello: (state, action) => {
    //     state.name = "Hello " + action.payload.name
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser2.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(updateUser2.fulfilled, (state, action) => {
        state.pending = false;
        state.error = false;
        state.userInfo = action.payload;
      })
      .addCase(updateUser2.rejected, (state) => {
        state.pending = null;
        state.error = true;
      });
    //   } {
    //     [updateUser2.pending]: (state) => {
    //       state.pending = true;
    //       state.error = false;
    //     },
    //     [updateUser2.fulfilled]: (state, action) => {
    //       state.pending = false;
    //       state.error = false;
    //       state.userInfo = action.payload;
    //     },
    //     [updateUser2.rejected]: (state) => {
    //       state.pending = false;
    //       state.error = true;
    //     },
  },
});

// export const { update, remove, addHello } = userSlice.actions;
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
