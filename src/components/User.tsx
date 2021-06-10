import { useState } from "react";

interface User {
  "user-id": string;
  name: string;
}

const tempUser: User = {
  "user-id": "AS13",
  name: "Adonys Santos",
};

export const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser(tempUser);
  };

  return (
    <div className="mt-5">
      <h3>Users: useSate</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      {!user ? (
        <pre>There are no users.</pre>
      ) : (
        <pre>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};
