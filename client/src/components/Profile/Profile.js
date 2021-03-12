import React, {useContext} from "react";
import AuthService from '../../Services/AuthService';
import { AuthContext } from "../../Context/AuthContext";

const Profile = (props) => {
  const { user,setUser,isAuthenticated,setIsAuthenticated } = useContext(AuthContext);
  console.log(user)
  console.log(isAuthenticated);

  return (
      <div className="container justify-content-center">
        <p>placeholder</p>
      </div>
    )
};

export default Profile;