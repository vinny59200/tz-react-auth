import React, { useEffect, useState } from 'react';
import { EasyUser } from '../model/EasyUser';

interface EasyUserListProps {
    easyUserList: EasyUser[];
}

const EasyUserList: React.FC<EasyUserListProps> = ({ easyUserList }) => {
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);

    const createUser = () => {
        // Logic to create a new user
        setShowCreateUserModal(false);
    };

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
                <div>
                    {/* Modal content for creating a new user */}
                    {/* Include a form and a submit button */}
                    {/* On submit, call the createUser function */}
                </div>
            )}
        </main>
    );
};

export default EasyUserList;