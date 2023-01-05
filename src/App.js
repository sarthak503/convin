import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage1 from "./containers/UserPage1";
import UserPage2 from "./containers/UserPage2";
import Header from "./containers/Header";
import "./App.css";
import UserDetails from "./containers/UserDetails";
import Button from "./containers/Button";
import PaginatedItems from "./containers/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../src/redux/actions/usersActions";
import axios from "axios";
import { useParams } from "react-router-dom";
function App() {
  // let pageNum;
  const dispatch = useDispatch();
  const [page, setPage]=useState(0);
  const[details,setDetails]=useState(null);
  const { id } = useParams();
  // const fetchUsers = async () => {
  //   console.log("Page ?? :",page)
 
  //   };
  const handlePageClick = async (data) => {

    // pageNum=data.selected+1;
    
    setPage(data.selected+1)
    if(data.selected+1){
      const response = await axios
        .get(`https://reqres.in/api/users?page=${data.selected+1}`)
        .catch((err) => {
          console.log("Err: ", err);
        })
        dispatch(setUsers(response.data))
      }
    console.log("hi", data.selected+1);
    
  };
  console.log("details:",id)
  return (
    <div className="App">
      <>
      <Header/>

      <UserPage1 setDetails={setDetails} page={page}/>
      {/* {
        id!==undefined?<UserDetails details={id}/>:null
      } */}
      <UserDetails/>
      <PaginatedItems handlePageClick={handlePageClick}/>
      {/* {
        page===1?(<UserPage1/>):<UserPage2/>
        
      } */}
      {/* <Router>
       

        <Routes> */}
          {/* <Route path="/" exact element = {<PaginatedItems handlePageClick={handlePageClick}/>}></Route>
          <Route path="/users/" exact element = {<UserPage1 page={page} />} />
          <Route path="/users?page=2" exact element = {<UserPage2 />} /> */}
          {/* <Route path="/users/:userId" exact element = {<UserDetails />} />
          <Route>404 Not Found!</Route>
        </Routes> 
      </Router>  */}




</>

</div>
    
  );
}

export default App;
