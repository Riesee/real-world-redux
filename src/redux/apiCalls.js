import axios from "axios";
import { updateStart, updateSuccess, updateError } from "./userSlice.js";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users", user);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError(err));
  }
};
