import axios from "../../utils/axios";
import {
  fetchtheatre,
  fetchByid,
  updatetheatre,
} from "../reducers/TheatreSlice";

export const asyncLoadTheatre = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/theatre");
    dispatch(fetchtheatre(response.data.theatres));
  } catch (error) {
    console.error(error);
  }
};

export const asyncgetbyid = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`/theatre/${id}`);
    dispatch(fetchByid(response.data.theatre));
  } catch (error) {
    console.error(error);
  }
};

export const asyncUpdateTheatre = (id, data) => async (dispatch, getState) => {
  try {
    const response = await axios.put(`/theatre/${id}`, data);
    dispatch(updatetheatre(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncAddTheatre = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`/theatre`, data);
    console.log(response.data.theatre)
    dispatch(fetchtheatre(response.data));
  } catch (error) {
    console.error(error);
  }
}