import React, { useEffect, useState, CSSProperties } from "react";
import { EasyUser } from "../model/EasyUser";
import '../App.css';

interface EasyUserListProps {
  easyUserList: EasyUser[];
}
//
const EasyUserList: React.FC<EasyUserListProps> = ({ easyUserList }) => {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);

  const createUser = () => {
    // Logic to create a new user
    setUsers([...users, newUser]);
    setShowCreateUserModal(false);
    setNewUser({ uuid: "", username: "", password: "" });
  };

  const [newUser, setNewUser] = useState({
    uuid: "",
    username: "",
    password: "",
  });

  const [users, setUsers] = useState<EasyUser[]>([]);

  useEffect(() => {
    const easyUsers: EasyUser[] = [
      {
        uuid: "123e4567-e89b-12d3-a456-426614174000",
        username: "user1",
        password: "pass1",
      },
      {
        uuid: "123e4567-e89b-12d3-a456-426614174001",
        username: "user2",
        password: "pass2",
      },
      {
        uuid: "123e4567-e89b-12d3-a456-426614174002",
        username: "user3",
        password: "pass3",
      },
    ];

    setUsers(easyUsers);
    console.log(easyUsers);
  }, []); // The empty array ensures this effect runs once on mount

  const handleInputChange = (e: any) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const [editingUser, setEditingUser] = useState<EasyUser | null>(null);

  const handleEditClick = (user: EasyUser) => {
    setEditingUser(user);
    setShowCreateUserModal(true);
  };

  const handleInputChangeEdit = (e: any) => {
    setEditingUser({
      ...editingUser,
      [e.target.name]: e.target.value,
    } as EasyUser);
  };

  const updateUser = () => {
    // Logic to update an existing user
    const updatedUsers = users.map((u) =>
      u.uuid === editingUser?.uuid ? editingUser : u
    );
    setUsers(updatedUsers);
    setShowCreateUserModal(false);
    setEditingUser(null);
  };

  // Add these styles at the top of your component file or in a separate CSS file
  const modalStyle: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    backgroundColor: "white", // Sakura uses a clean white background
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow to match Sakura's aesthetics
    color: "#4a4a4a", // Text color from Sakura
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', // Font family from Sakura
    fontSize: "1.8rem", // Base font size from Sakura
    lineHeight: "1.618", // Line height from Sakura
    maxWidth: "38em", // Max width to maintain Sakura's content width
    border: "1px solid #f1f1f1", // Border color from Sakura's inputs and buttons
  };

  const overlayStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay color, same as original
    zIndex: 999, // Same as original to keep the overlay behind the modal
  };

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>uuid</th>
            <th>username</th>
            <th>password</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.uuid}>
              <td>{user.uuid}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <button onClick={() => setShowCreateUserModal(true)}>
                Create new User
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

      {showCreateUserModal && (
        <>
          <div
            style={overlayStyle}
            onClick={() => setShowCreateUserModal(false)}
          />
          <div style={modalStyle}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editingUser ? updateUser() : createUser();
              }}
            >
              {editingUser && (
                <>
                  <label>
                    UUID:
                    <input
                      type="text"
                      name="uuid"
                      value={editingUser.uuid}
                      onChange={handleInputChangeEdit}
                      required
                    />
                  </label>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={editingUser.username}
                      onChange={handleInputChangeEdit}
                      required
                    />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={editingUser.password}
                      onChange={handleInputChangeEdit}
                      required
                    />
                  </label>
                </>
              )}
              {!editingUser && (
                <>
                  <label>
                    UUID:
                    <input
                      type="text"
                      name="uuid"
                      value={newUser.uuid}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={newUser.username}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={newUser.password}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </>
              )}
              <button type="submit">
                {editingUser ? "Update User" : "Create User"}
              </button>
            </form>
          </div>
        </>
      )}
    </main>
  );
};

export default EasyUserList;
