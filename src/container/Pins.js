import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Feed, Search, CreatePin, PinDetail, NavBar } from "../components";

const Pins = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-2 md-5">
      <div className="bg-gray-50">
        <NavBar
          user={user}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/categories/:categoryId" element={<Feed />} />
            <Route
              path="/pin-detail/:pinId"
              element={<PinDetail user={user} />}
            />
            <Route path="/create-pin" element={<CreatePin user={user} />} />
            <Route
              path="search"
              element={
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Pins;
