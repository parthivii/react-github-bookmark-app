import React from "react";
import Users from "./users/Users";
import Repos from "./repos/Repos";

const Result = ({
  githubapi,
  setInputValue,
  userList,
  setUserList,
  repoList,
  setRepoList,
  status,
}) => {
  if (status === "users") {
    return (
      <Users
        githubapi={githubapi}
        setInputValue={setInputValue}
        userList={userList}
        setUserList={setUserList}
      />
    );
  } else {
    return (
      <Repos
        githubapi={githubapi}
        setInputValue={setInputValue}
        repoList={repoList}
        setRepoList={setRepoList}
      />
    );
  }
};

export default Result;
