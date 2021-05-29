import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"
import bannerImg from  "./images/ashley-whitlatch-36aGnv29Ss0-unsplash.jpg"
const Sidebar = () => {
  const recentItem = (topic) => {
   return  <div className="sidebar__recentItem">
      <span className="sidebar__has">#</span>
      <p>{topic}</p>
    </div>
  }
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bannerImg} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Sakib Ahmed</h2>
        <h4>React Developer</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed</p>
            <p className="sidebar__statNumber">23,400</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">25,600</p>
          </div>
        
      </div>
      <div className="sidebar__bottom">
      <p>Recent</p> 
      {recentItem("react js")}
      {recentItem("vue js")}
      {recentItem("angular")}
      {recentItem("programing")}
      {recentItem("software engineering")}
      {recentItem("design")}
      {recentItem("developer")}
    </div>
    </div>
  );
};

export default Sidebar;
