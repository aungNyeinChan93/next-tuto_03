/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

type Gender = "male" | "female";
type UserType = "admin" | "regular";

interface User {
  id?: number;
  name: string;
  email: string;
  gender: Gender | string;
  status: boolean;
  address: Address;
  userType: UserType;
}

export const createUser = async (newUser: any) => {
  const response = await fetch(`http://localhost:3000/users/api`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await response.json();
  return data;
};

const ComponentName = async () => {
  const newUser = {
    name: "Oliver King",
    email: "oliver.king@example.com",
    gender: "male",
    status: true,
    address: {
      street: "999 Sycamore Street",
      city: "Greenwood",
      state: "OH",
      zipCode: "44101",
    },
    userType: "regular",
  };

  const user = await createUser(newUser);
  //   console.log(user);

  return (
    <React.Fragment>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </React.Fragment>
  );
};

export default ComponentName;
