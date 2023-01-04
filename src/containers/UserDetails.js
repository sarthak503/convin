import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedUser,
  removeSelectedUser,
} from "../redux/actions/usersActions";
const UserDetails = () => {
  const { userId } = useParams();
  let user = useSelector((state) => state.user);
  // const { id, email,first_name,last_name, avatar} = user;
  const userData= user.data;
  console.log("Hi: ",userData)
  const dispatch = useDispatch();
  const fetchUserDetail = async (id) => {
    const response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedUser(response.data));
  };

  useEffect(() => {
    if (userId && userId !== "") fetchUserDetail(userId);
    return () => {
      dispatch(removeSelectedUser());
    };
  }, [userId]);
  return (
    <div className="ui grid container">
      {Object.keys(user).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={userData.avatar} alt="img" />
              </div>
              <div className="content">
                <div className="header">{userData.first_name +" "+ userData.last_name}</div>
                <div className="meta price"> {userData.email}</div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default UserDetails;
