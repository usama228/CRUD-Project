import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddUser = () => {
    if (name.trim() === "") return;

    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = name;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, name]);
    }
    setName("");
  };

  const handleEdit = (index) => {
    setName(users[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
  };

  return (
    <div className="App">
      <h2>Simple CRUD with useState</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>
        {editingIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

