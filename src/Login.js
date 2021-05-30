import React, { useState } from 'react';
import "./Login.css"
import img from "./images/95o6rrc5ws6mlw6wqzy0xgj7y.png"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from "./features/user/userSlice"
const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const loginToApp = (e) => {
       
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl:userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }
    const register = (e) => {
        e.preventDefault()

       
        if(!name){
            alert("name is required")
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            }).then(() => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName: name,
                    photoUrl:profilePic

                }))

            })

        }).catch(error => alert(error))
    }
   
    return (
        <div className="login">
            
            <img src={img} alt="  " />
            <form >

            { newUser && <> <input value={name} onChange={e => setName(e.target.value)} type="text" name="" placeholder="Full name ( required if registering)" id="" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" name="" placeholder="Profile img URL ( optional)" id="" /></>}
               
                <input value={email} onChange={e =>  setEmail(e.target.value)} type="email" name="" id="" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="" placeholder="Password" />
                <button style={{cursor:"pointer"}} onClick={newUser? register:loginToApp} type="submit">{newUser?"Sign up":"Sign in"}</button>
                
            </form>
            {newUser && <p>Already member? <span className="login__register" onClick={() => setNewUser(false)}>Log in</span> </p>}
            {!newUser && <p>Not a member?{" "} <span onClick={() => setNewUser(true)} className="login__register">Register Now</span> </p> }
            
        </div>
    );
};

export default Login;