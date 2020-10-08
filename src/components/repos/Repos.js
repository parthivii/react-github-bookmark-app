import React from "react";
import { List, ListItem } from "@chakra-ui/core";

const Repos = ({ githubapi, setInputValue, repoList, setRepoList }) => {
  const submitAPIHandler = (apis) => {
    //e.preventDefault(); //prevents refresh of page
    setRepoList([...repoList, { text: apis, id: apis.id }]);
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
              {apis.name}
            </p>

            {/* <p>{apis.description}</p>  */}
          </ListItem>
        );
      })}
    </List>
  );
};
export default Repos;
