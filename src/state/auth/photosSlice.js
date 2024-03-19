import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};
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
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetPhotoState } = photosSlice.actions;
export default photosSlice.reducer;
