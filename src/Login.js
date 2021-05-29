import React, { useState } from 'react';
import "./Login.css"
import img from "./images/95o6rrc5ws6mlw6wqzy0xgj7y.png"
const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const register = (e) => {
        e.preventDefault()

        if(!name){
            alert("name is required")
        }
    }
    const loginToApp = () => {}
    return (
        <div className="login">
            
            <img src={img} alt="  " />
            <form >
                <input value={name} onChange={e => setName(e.target.value)} type="text" name="" placeholder="Full name ( required if registering" id="" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" name="" placeholder="Profile img URL ( optional)" id="" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="" id="" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="" />
                <button onClick={loginToApp} type="submit">Sign in</button>
                
            </form>
            <p>Not a member?{" "} <span onClick={register} className="login__register">Register Now</span> </p>
        </div>
    );
};

export default Login;