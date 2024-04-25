import React, { useEffect, useState, CSSProperties } from 'react';
import { EasyUser } from '../model/EasyUser';

interface EasyUserListProps {
    easyUserList: EasyUser[];
}

const EasyUserList: React.FC<EasyUserListProps> = ({ easyUserList }) => {
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);

    const createUser = () => {
        // Logic to create a new user
        setUsers([...users, newUser]);
        setShowCreateUserModal(false);
    };

    const [newUser, setNewUser] = useState({ uuid: '', username: '', password: '' });

    const [users, setUsers] = useState<EasyUser[]>([]);

    useEffect(() => {
        const easyUsers: EasyUser[] = [
            { uuid: '123e4567-e89b-12d3-a456-426614174000', username: 'user1', password: 'pass1' },
            { uuid: '123e4567-e89b-12d3-a456-426614174001', username: 'user2', password: 'pass2' },
            { uuid: '123e4567-e89b-12d3-a456-426614174002', username: 'user3', password: 'pass3' }
        ];

        setUsers(easyUsers);
        console.log(easyUsers);
    }, []); // The empty array ensures this effect runs once on mount

    const handleInputChange = (e:any) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

// Add these styles at the top of your component file or in a separate CSS file
const modalStyle: CSSProperties = {
    position: 'fixed', // 'fixed' is a valid value for the 'position' property
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999
};
    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>uuid</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.uuid}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
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
                 <div style={overlayStyle} onClick={() => setShowCreateUserModal(false)} />
                <div style={modalStyle}>
                    <form onSubmit={(e:any) => {
                        e.preventDefault();
                        createUser();
                    }}>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
                </>
            )}

        </main>
    );
};

export default EasyUserList;