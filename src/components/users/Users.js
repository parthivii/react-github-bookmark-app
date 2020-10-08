import React from "react";
import { List, ListItem } from "@chakra-ui/core";

const Users = ({ githubapi, setInputValue, userList, setUserList }) => {
  const submitAPIHandler = (apis) => {
    //e.preventDefault(); //prevents refresh of page
    setUserList([...userList, { text: apis, id: apis.id }]);
    setInputValue("");
  };

  return (
    <List>
      {githubapi.map((apis) => {
        return (
          <ListItem key={apis.id}>
            <p
              onClick={() => {
                submitAPIHandler(apis);
              }}
            >
              {apis.login}
            </p>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Users;
