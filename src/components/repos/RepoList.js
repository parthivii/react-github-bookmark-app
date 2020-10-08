import React from "react";

import RepoItem from "./RepoItem";

const RepoList = ({ repoList, setRepoList }) => {
  return (
    <div>
      <ul>
        {repoList.map((items) => (
          <RepoItem
            setRepoList={setRepoList}
            repoList={repoList}
            text={items.text}
            key={repoList.id}
            items={items}
          />
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
