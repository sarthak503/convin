import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
const UserComponent = () => {
  // const users = useSelector((state) => state.allUsers.users||[]);
  // console.log("Data is as follows : ",users.data)

 // const renderList = users&&users.data&&users.data.map((user) => {
  //   const {id} = user
  
  //   return (
     
  //   );
  // });
  return <> 
  <div className="four wide column" key={id}>
  <Link to={`/users/${id}`}>
    <div className="ui link cards">
      <div className="card">
        <div className="content">
          <div className="header">{id}</div>
        </div>
      </div>
    </div>
  </Link>
</div>
</>;
};

export default UserComponent;
