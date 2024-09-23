import { useState } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        if (!response.ok) throw new Error("networking response was NOT okay");
      } catch (error) {
        console.error("this is my error:", error);
      }
    };
    fetchUsers();
  }, []);

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
