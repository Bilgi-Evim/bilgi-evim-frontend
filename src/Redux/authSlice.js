import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, login as loginService, logout as logoutService } from "../Services/authService";

export const login = createAsyncThunk(
  "auth/login",
  async ({ credentials, role }, { rejectWithValue }) => {
    try {
      const response = await loginService(credentials, role);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  user: getCurrentUser(),
  isAuthenticated: !!getCurrentUser(),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = {
          token: action.payload.access_token,
          role: action.payload.role,
        };
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearUser } = authSlice.actions;

export const logout = () => (dispatch) => {
  logoutService();
  dispatch(clearUser());
};

export default authSlice.reducer;
