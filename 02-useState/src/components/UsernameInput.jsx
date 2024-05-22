// src/components/UsernameInput.jsx

import { useState } from "react";

function UsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <p>Enter Your Name</p>
      <input
        type="text"
        value={username}
        placeholder="Enter your name"
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <p>Username: {username.toLowerCase()}</p>
    </div>
  );
}

export default UsernameInput;
