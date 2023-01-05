import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions/usersActions";
import UserComponent2 from "./UserComponent2";
import Pagination from "./Pagination";
const UserPage = () => {
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    const response = await axios
      .get("https://reqres.in/api/users?page=2")

      dispatch(setUsers(response.data))
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response.data)
  };


  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(Pagination.pageNum)
  console.log("Users :", users);
  return (
    <div className="ui grid container">
      <UserComponent2 />
    </div>
  );
};

export default UserPage;
