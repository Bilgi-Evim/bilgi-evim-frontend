import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, login as loginService, logout as logoutService } from "../Services/authService";
import { startLoading, stopLoading } from "./loadingSlice";

export const login = createAsyncThunk(
  "auth/login",
  async ({ credentials, role }, { dispatch, rejectWithValue }) => {
    dispatch(setLoadingMessage("Giriş yapılıyor..."));
    dispatch(startLoading());
    try {
      const response = await loginService(credentials, role);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    } finally {
      dispatch(stopLoading());
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  dispatch(setLoadingMessage("Çıkış yapılıyor..."));
  dispatch(startLoading());
  await new Promise((resolve) => setTimeout(resolve, 2000));
  logoutService();
  dispatch(clearUser());
  dispatch(stopLoading());
});

const initialState = {
  user: getCurrentUser(),
  isAuthenticated: !!getCurrentUser(),
  loading: false,
  loadingMessage: "",
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
    setLoadingMessage: (state, action) => { 
      state.loadingMessage = action.payload;
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
        state.loading = false;
        state.loadingMessage = "";
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.loadingMessage = "";
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      });
  },
});

export const { clearUser, setLoadingMessage } = authSlice.actions;
export default authSlice.reducer;
