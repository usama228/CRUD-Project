import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const handleAddUser = () => {
    if (!name.trim() || !avatar) return;

    const newUser = { name, avatar };

    if (editingIndex !== null) {
      const updated = [...users];
      updated[editingIndex] = newUser;
      setUsers(updated);
      setEditingIndex(null);
    } else {
      setUsers([...users, newUser]);
    }

    setName("");
    setAvatar(null);
    document.getElementById("avatar").value = null;
  };

  const handleEdit = (index) => {
    setName(users[index].name);
    setAvatar(users[index].avatar);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
  };

  return (
    <div className="App">
      <h2>React CRUD with Avatar</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input id="avatar" type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleAddUser}>
          {editingIndex !== null ? "Update User" : "Add User"}
        </button>
      </div>

      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index}>
            <span className="index">{index + 1}.</span>
            <img src={user.avatar} alt="avatar" className="avatar" />
            <span className="username">{user.name}</span>
            <div>
              <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
