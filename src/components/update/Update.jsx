import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { remove, update, addHello } from "../../redux/userSlice";
// import { remove } from "../../redux/userSlice";
// import { updateUser } from "../../redux/apiCalls";
import { updateUser2 } from "../../redux/userSlice";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {userInfo, pending, error} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    // dispatch(addHello({ name, email }));
    // updateUser({name, email}, dispatch) THUNKTAN ÖNCE
    dispatch(updateUser2({name, email}))

  };

  const handleDelete = (e) => {
    e.preventDefault();
    // dispatch(remove())
  }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button onClick={handleDelete} className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="formInput"
                type="text"
                placeholder={userInfo.name}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="formInput"
                type="text"
                placeholder={userInfo.email}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button disabled={pending} onClick={handleUpdate} className="updateButton">
              Update
            </button>
            {error && <span className="error">Something went wrong!</span>}
            {pending === false && <span className="success">Account has been updated</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
