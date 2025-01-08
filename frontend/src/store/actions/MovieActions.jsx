import axios from "../../utils/axios";
import { fetchmovie, fetchByid, updatemovie, createmovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/movie");
    dispatch(fetchmovie(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncaddMovie = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/movie", data);
    console.log("data",data);
    console.log("response data",response.data);
    
    
    dispatch(createmovie(response.data));
  } catch (error) {
    console.error(error);
  }
}

export const asyncgetbyid = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`/movie/${id}`);
    dispatch(fetchByid(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncUpdateMovie = (id, data) => async (dispatch, getState) => {
  try {
    const response = await axios.put(`/movie/${id}`, data);
    dispatch(updatemovie(response.data));
  } catch (error) {
    console.error(error);
  }
};
