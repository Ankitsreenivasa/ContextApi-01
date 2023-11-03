import React, { Children, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ Children }) => {
  const [user, setUser] = React.useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {Children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
