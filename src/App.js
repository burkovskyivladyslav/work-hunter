import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { selectUser } from "./features/user/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* Added Sidebar */}
          <Sidebar />
          <Feed/>
        </div>
      )}

    </div>
  );
}

export default App;
