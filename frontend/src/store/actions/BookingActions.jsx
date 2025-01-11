import axios from "../../utils/axios";
import {
  createbooking,
  fetchByid,
  deletebooking,
  fetchbooking,
} from "../reducers/BookingSlice";

export const asyncLoadBooking = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/booking");
    dispatch(fetchbooking(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asynccreateBooking = (data) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/booking", data);
    dispatch(createbooking(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const asyncdeleteBooking = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/booking/${id}`);
    dispatch(deletebooking(id));
  } catch (error) {
    console.error(error);
  }
};

export const asyncgetBookingById = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`/booking/${id}`);
    dispatch(fetchByid(response.data));
  } catch (error) {
    console.error(error);
  }
};
