import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [state, updateState] = useState({
    loggedIn: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({
      ...state,
      [name]: value
    })
  }

  const handleSignin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/signin", state);
    if(res.data.token === "Success") {
      updateState({
        ...state,
        loggedIn: true
      })
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/signup", state);
    if(res.data.token === "Success") {
      updateState({
        ...state,
        loggedIn: true
      })
    }
  };

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {state.loggedIn ? <div>
        <h1>Logged In</h1>
        <button className="btn btn-danger" onClick={() => updateState({loggedIn: false})}>Logout</button>
      </div>
        :
        <div style={{
          backgroundColor: "white",
          width: "30%",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 2px 14px -4px rgba(0,0,0,0.75)",
          maxWidth: "410px"
        }}>
          <h1 className={"text-center"}>Welcome</h1>
          <form style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div className="form-group" style={{ width: "80%" }}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input type="text" name="name" onChange={handleChange} className="form-control" id="Name" placeholder="Name" />
            </div>
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group" style={{ width: "80%" }}>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="btn-group">
              <button onClick={handleRegister} style={{ margin: "0 10px", width: "100px" }} className="btn btn-primary margin-lg">Register</button>
              <button onClick={handleSignin} style={{ margin: "0 10px", width: "100px" }} className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      }
    </div>
  )
};

export default App;
