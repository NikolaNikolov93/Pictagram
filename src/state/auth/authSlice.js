import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authToken: null,
  userId: null,
  likedPics: [],
};

const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
    },
    saveToken(state, action) {
      state.authToken = action.payload;
    },
    saveUserId(state, action) {
      state.userId = action.payload;
    },
    saveLikedPics(state, action) {
      state.likedPics = [...state.likedPics, action.payload];
    },
    removeLikedPic(state, action) {
      state.likedPics = state.likedPics.filter((pic) => pic !== action.payload);
    },
    logout() {
      localStorage.clear();

      return initialState;
    },
  },
});

export const {
  saveUser,
  saveToken,
  saveUserId,
  logout,
  saveLikedPics,
  removeLikedPic,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
