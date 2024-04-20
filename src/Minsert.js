// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Minsert() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:3001/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to create a new item
    axios.post('http://localhost:3001/api/items', newItem)
      .then(response => {
        setItems([...items, response.data]);
        setNewItem({ name: '', description: '' });
      })
      .catch(error => console.error(error));
  };

  const handleDelete = (id) => {
    // Send a DELETE request to remove an item
    axios.delete(`http://localhost:3001/api/items/${id}`)
      .then(response => {
        setItems(items.filter(item => item._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newItem.description} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Minsert;
