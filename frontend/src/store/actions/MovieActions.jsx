import axios from "../../utils/axios";
import { fetchmovie, fetchByid, updatemovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/movie");
    dispatch(fetchmovie(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncgetbyid = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`/movie/${id}`);
    dispatch(fetchByid(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncUpdateMovie = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.put(`/movie/${id}`);
    dispatch(updatemovie(response.data));
  } catch (error) {
    console.error(error);
  }
};
