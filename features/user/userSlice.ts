import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  firstName: string;
  lastName: string;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  username: "",
  firstName: "",
  lastName: "",
  status: "idle",
};

// Async thunk to fetch user data
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  console.log("Fetching user from API...");
  const response = await fetch("https://run.mocky.io/v3/61ffeebd-1b8d-4c0e-8703-c8778819e46a");
  const data = await response.json();
  console.log("API Response in fetchUser:", data);
  return data;
});


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("Fetched User Data in Reducer:", action.payload); // Debug Redux Action Payload

        state.status = "idle";
        state.username = action.payload.username || "DefaultUser";
        state.firstName = action.payload.firstName || "";
        state.lastName = action.payload.lastName || "";
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
