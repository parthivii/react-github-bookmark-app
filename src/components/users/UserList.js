import React from "react";
import UserItem from "./UserItem";

const UserList = ({ userList, setUserList }) => {
  return (
    <div>
      <ul>
        {userList.map((items) => (
          <UserItem
            setUserList={setUserList}
            userList={userList}
            text={items.text}
            key={userList.id}
            items={items}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
