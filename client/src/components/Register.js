import React, { useState, useRef,useEffect } from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";

const Register = (props) => {
  const [user, setUser] = useState({ name: "" ,username: "", password: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);
  
  useEffect(()=> {
    return ()=> {
        clearTimeout(timerID);
    }
  },[]);

  const onChange = e => {
      setUser({...user,[e.target.name] : e.target.value});
  }

  const resetForm = () => {
      setUser({name: "", username: "", password: ""});
  }

  const onSubmit = e => {
      e.preventDefault();
      AuthService.register(user).then(data=>{
          const { message } = data;
          setMessage(message);
          resetForm();
          if(!message.msgError){
              timerID = setTimeout(() => {
                  props.history.push('/login')
              },2000)
          }
      });
  }

  return (
    <div className="container justify-content-center">
      <form onSubmit={onSubmit}>
        <h2 className="mainTitle animate__animated animate__flipInX">Time to register</h2>
        <label htmlFor="name" className="sr-only">
          Name: 
        </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={onChange}
          className="form-control"
          placeholder="enter name"
        />
        <label htmlFor="username" className="sr-only">
          Username: 
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onChange}
          className="form-control"
          placeholder="enter username"
        />
        <label htmlFor="password" className="sr-only">
          Password: 
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChange}
          className="form-control"
          placeholder="enter password"
        />
        <button className="btn btn-info" type="submit">Register</button>
      </form>
      {message ? <Message message={message}/> : null}
    </div>
  );
};

export default Register;