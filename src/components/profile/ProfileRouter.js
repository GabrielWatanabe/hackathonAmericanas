import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";

export const ProfileRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default ProfileRouter;
