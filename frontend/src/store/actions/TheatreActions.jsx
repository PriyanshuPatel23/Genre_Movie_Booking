import axios from "../../utils/axios";
import {
  fetchtheatre,
  fetchByid,
  updatetheatre,
} from "../reducers/TheatreSlice";

export const asyncLoadTheatre = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/theatre");
    dispatch(fetchtheatre(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncgetbyid = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`/theatre/${id}`);
    dispatch(fetchByid(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncUpdateTheatre = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.put(`/theatre/${id}`);
    dispatch(updatetheatre(response.data));
  } catch (error) {
    console.error(error);
  }
};
