import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [username, setUsername] = useState({
    username: ""
  });

  const changeUsername = val => {
    setUsername({
      username: val
    });
  };

  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <UserContext.Provider value={{ username, changeUsername }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
