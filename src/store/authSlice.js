  //authSlice.js
  import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    status: false, // user is not logged in
    userData: null,
    userId: null,
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action) => {
        state.status = true;
        state.userData = action.payload;
        console.log(action.payload);
        
      },
      logout: (state) => {
        state.status = false;
        state.userData = null;
      },
    },
  });

  export const {
    login,
    logout,
  } = authSlice.actions;
  export default authSlice.reducer;