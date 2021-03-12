import React, { useContext } from "react";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import "./Home.css";

function Home() {
  const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then(data=> {
      if(data.success){
        setUser(data.user);
        setIsAuthenticated(false);
      }
    })
  }

  const unauthenticatedHome = () => {
    return (
      <>
        <a href="/login"><button>Login</button></a>
        <a href="/register"><button>register</button></a>
      </>
    )
  }

  const authenticatedHome = () => {
    console.log("hello",user)
    return (
      <>
        <h2 className="mainTitle animate__animated animate__flipInX">Who did it?</h2>
        
        <div className="choreTitle list-group animate__animated animate__fadeIn animate__slow">
          <h6 href="#" className="list-group-item ">
            <strong  >Front Yard</strong>
            <br/>
             <span className="yourScore">You: {user.frontyard}</span>
             <span className="mvpScore">MVP: "24"</span>
          </h6>
          <h6 href="#" className="list-group-item ">
            <strong  >Back Yard</strong>
            <br/>
             <span className="yourScore">You: {user.backyard}</span>
             <span className="mvpScore">MVP: "24"</span>
          </h6>
          <h6 href="#" className="list-group-item ">
            <strong  >Daily Trash</strong>
            <br/>
             <span className="yourScore">You: {user.dailytrash}</span>
             <span className="mvpScore">MVP: "24"</span>
          </h6>
          <h6 href="#" className="list-group-item ">
            <strong  >Trash to Curb</strong>
            <br/>
             <span className="yourScore">You: {user.trash2curb}</span>
             <span className="mvpScore">MVP: "24"</span>
          </h6>
          <h6 href="#" className="list-group-item ">
            <strong  >Sweep & Mop</strong>
            <br/>
             <span className="yourScore">You: {user.sweepmop}</span>
             <span className="mvpScore">MVP: "24"</span>
          </h6>
          <h6 href="#" className="list-group-item ">
            <strong  >Living Room</strong>
            <br/>
             <span className="yourScore">You: {user.livingroom}</span>
             <span className="mvpScore">MVP: "24"</span>
          </h6>
          <h6 href="#" className="list-group-item ">
            <strong  >Bathroom</strong>
            <br/>
             <span className="yourScore">You: {user.bath}</span>
             <span className="mvpScore">MVP: "24"</span>
          </h6>
          
          <a href="/new" className="addChore"><button className="btn btn-info submitBtn">Submit a New Chore</button></a>
        </div>
        <button type="button"
                className="btn danger"
                onClick={onClickLogoutHandler}
                >Logout</button>
      </>
    )
  }

  return (
    <div className="container justify-content-center">
      { !isAuthenticated ? unauthenticatedHome() : authenticatedHome() }
    </div>
  );
}

export default Home;
