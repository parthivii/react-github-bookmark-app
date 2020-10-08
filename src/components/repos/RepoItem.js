import React from "react";
import { Icon } from "@chakra-ui/core";

const RepoItem = ({ text, repoList, setRepoList, items, key }) => {
  const deleteHandler = () => {
    setRepoList(repoList.filter((el) => el.id !== items.id));
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <ul>
              <li key={Math.random() * 1000}>
                <a
                  href={text.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.name}
                </a>
              </li>
            </ul>
          </td>
          <td>
            <Icon onClick={deleteHandler} name="delete" className="icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RepoItem;
