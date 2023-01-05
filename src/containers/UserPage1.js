import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions/usersActions";
import UserComponent from "./UserComponent";

const UserPage = ({setDetails}) => {
 
  const users = useSelector((state) => state.allUsers.users);
  console.log("This is data: ",users)
  const dispatch = useDispatch();
  // const fetchUsers = async () => {
  //   console.log("Page ?? :",page)
  //   if(page){
  //   const response = await axios
  //     .get(`https://reqres.in/api/users?page=${page}`)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     })
  //     dispatch(setUsers(response.data))
  //   }
  //   };
    // useEffect(() => {
    //   fetchUsers();
    // }, []);
  
  return (
    <div className="ui grid container">
      {
        users&&users.data&&users.data.map((e) =>(<UserComponent setDetails={setDetails} key={e.id} id={e.id}/>))
      }
      {/* <UserComponent /> */}
    </div>
  );
};

export default UserPage;
