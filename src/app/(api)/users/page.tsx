import React from "react";

export const getUsers = async () => {
  const response = await fetch("http://localhost:3000/users/api");
  const { serachUsers } = await response.json();
  return serachUsers;
};

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <React.Fragment>
      <main>Users Pages</main>
      <div>
        {users &&
          Array.isArray(users) &&
          users?.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>
    </React.Fragment>
  );
};

export default UsersPage;
