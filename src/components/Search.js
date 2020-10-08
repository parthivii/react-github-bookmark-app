import React from "react";
import { Input, InputRightElement, InputGroup, Select } from "@chakra-ui/core";

const Search = ({ setInputValue, setStatus }) => {
  // SUBMIT THE SEARCHBOX QUERY
  const submitHandler = (e) => {
    e.preventDefault();
    setInputValue(e.target.elements.query.value);
  };

  //TO CSWTICH BETWEEN USERS AND REPO
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <InputGroup size="lg">
        <Input type="text" name="query" placeholder="Search..." />
        <InputRightElement width="6rem">
          <Select onChange={statusHandler}>
            <option value="users">Users</option>
            <option value="repos">Repositories</option>
          </Select>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default Search;
