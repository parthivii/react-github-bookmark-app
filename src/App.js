import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  CSSReset,
  Heading,
  Flex,
  SimpleGrid,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core";

import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";
import UserList from "./components/users/UserList";
import RepoList from "./components/repos/RepoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [githubapi, setGithubapi] = useState([]);
  const [status, setStatus] = useState("users");
  const [userList, setUserList] = useState([]);
  const [repoList, setRepoList] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  let api = "";
  switch (status) {
    case "users":
      api = "https://api.github.com/search/users?q=";
      break;
    case "repos":
      api = "https://api.github.com/search/repositories?q=/";
      break;
    default:
      break;
  }
  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);

    //make API call

    fetch(api + inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setGithubapi(data.items);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);

  //make API call

  return (
    <ThemeProvider>
      <CSSReset />
      <Flex align="center" className="navbar" h="200px">
        <Flex w="100%" p={30}>
          <Heading as="h1" size="2xl" color="white">
            Github Bookmark App
          </Heading>
        </Flex>
        <Flex w="100%" p={30} justify="right">
          <Icon
            aria-label="Search"
            name="search"
            size="35px"
            color="white"
            ref={btnRef}
            onClick={onOpen}
            cursor="pointer"
          />
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader>Search to bookmark!</DrawerHeader>

          <DrawerBody>
            <Search setInputValue={setInputValue} setStatus={setStatus} />
            {isLoading && <div>Loading...</div>}
            {error && (
              <div>
                Unexpected Error Occurred fetching data. Please try again later!
              </div>
            )}
            <Result
              githubapi={githubapi}
              status={status}
              setInputValue={setInputValue}
              userList={userList}
              setUserList={setUserList}
              repoList={repoList}
              setRepoList={setRepoList}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <SimpleGrid columns={2} gap={1}>
        <Flex justify="center">
          <Heading as="h3" p={30}>
            Your Saved Users
          </Heading>
        </Flex>
        <Flex justify="center">
          <Heading as="h3" p={30}>
            Your Saved Repositories
          </Heading>
        </Flex>
        <div>
          <UserList userList={userList} setUserList={setUserList} />
        </div>
        <div>
          <RepoList repoList={repoList} setRepoList={setRepoList} />
        </div>
      </SimpleGrid>
    </ThemeProvider>
  );
}
//todo= list
export default App;
