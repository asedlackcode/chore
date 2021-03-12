import React, {useContext} from "react";
import AuthService from '../Services/AuthService';
import { AuthContext } from "../Context/AuthContext";

const Stats = (props) => {
  const { user,setUser,isAuthenticated,setIsAuthenticated } = useContext(AuthContext);
  console.log(user)
  console.log(isAuthenticated);

  return (
      <div className="container justify-content-center">
        <p>stats page</p>
      </div>
    )
};

export default Stats;