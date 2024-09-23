import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const fetchUserById = (id) => {
    console.log(id);
  };
  return (
    <>
      <div>
        <h1>users list</h1>

        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => fetchUserById(user.id)}></li>
          ))}
        </ul>

        {user && (
          <div>
            <h2>user data</h2>
            <p>
              <strong>name:</strong> {user.name}
            </p>
            <p>
              <strong>email:</strong> {user.email}
            </p>
            <p>
              <strong>address:</strong> {user.address.city} ,
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
