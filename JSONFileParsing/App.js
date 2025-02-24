// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchData, saveData } from './dataService';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Parse (read) data from JSON
        fetchData().then(data => {
            setUsers(data.users);
        });
    }, []);

    // Add new user and save to JSON
    const addNewUser = () => {
        const newUser = { name: 'Priya', age: 28, city: 'Delhi' };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        // Save updated data back to JSON
        const updatedData = { users: updatedUsers };
        saveData(updatedData);
    };

    return (
        <div className="App">
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name} - {user.age} - {user.city}</li>
                ))}
            </ul>
            <button onClick={addNewUser}>Add New User</button>
        </div>
    );
}

export default App;
