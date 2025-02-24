// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchData, saveData } from './dataService';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Parse (read) data from JSON on component load
        fetchData().then(data => {
            setUsers(data.users);
        });
    }, []);

    // Add new user without downloading the JSON file
    const addNewUser = () => {
        const newUser = { name: 'Priya', age: 28, city: 'Delhi' };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
    };

    // Save updated data back to JSON only when 'Save Data' is clicked
    const saveUserData = () => {
        const updatedData = { users };
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
            <button onClick={saveUserData} style={{ marginLeft: '10px' }}>Save Data</button>
        </div>
    );
}

export default App;
