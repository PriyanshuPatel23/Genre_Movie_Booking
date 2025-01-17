import axios from "../../utils/axios";
import {
  fetchByid,
  createuser,
  updateuser,
  isAuthenticated,
  isAdmin,
} from "../reducers/UserSlice";

export const asyncCreateUser = (data) => async (dispatch, getState) => {
  try {
    const user = await axios.post("/signup", data);
    dispatch(createuser(user.data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncisAuthenticated = () => async (dispatch, getState) => {
  try {
    const user = await axios.get(`/isAuthenticated`);
    if (user) {
      dispatch(isAuthenticated(user));
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncisAdmin = () => async (dispatch, getState) => {
  try {
    const user = await axios.get(`/isAdmin`);
    if (user) {
      dispatch(isAdmin(user));
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncgetUserById = () => async (dispatch, getState) => {
  try {
    const user = await axios.get(`/getuser`);
    dispatch(fetchByid(user.data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (data) => async (dispatch, getState) => {
  try {
    const user = await axios.put(`/updateuser`, data);
    dispatch(updateuser(user.data));
  } catch (error) {
    console.log(error);
  }
};
