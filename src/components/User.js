import React from "react";
import { useState, useEffect } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/Animesh198");

    const json = await data.json();

    setUserInfo(json);
  };

  return (
    <div className="user-card">
      <img src={userInfo.avatar_url} alt="My_pic" />
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: {userInfo.location}</h3>
      <h4>Contact: @animesh198</h4>
    </div>
  );
};

export default User;
