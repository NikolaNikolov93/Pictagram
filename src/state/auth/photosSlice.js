import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos", // action type prefix
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=250"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }
    const photos = await response.json();
    return photos;
  }
);

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    resetPhotoState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const { resetPhotoState } = photosSlice.actions;
export default photosSlice.reducer;
