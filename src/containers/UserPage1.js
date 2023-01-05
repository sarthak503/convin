import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions/usersActions";
import UserComponent from "./UserComponent";
import Pagination from "./Pagination";
let currentPage=0;
const UserPage = ({page}) => {
 
  const users = useSelector((state) => state.allUsers.users);

  const dispatch = useDispatch();
  const fetchUsers = async () => {
    console.log("Page ?? :",page)
    if(page){
    const response = await axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .catch((err) => {
        console.log("Err: ", err);
      })
      dispatch(setUsers(response.data))
    }
    };
    useEffect(() => {
      fetchUsers();
    }, []);
  
  return (
    <div className="ui grid container">
      <UserComponent />
    </div>
  );
};

export default UserPage;
