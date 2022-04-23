import {useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  // form theke jinish target korchi
  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name, email};

    // post data to server 

    fetch('http://localhost:4000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })

  } 


  return (
    <div className="App">
      <h1>i am loving to handle react. my own data: {users.length}</h1>
      <form onSubmit={handleAddUser} action="">
        <input type="text" name='name' placeholder='name' required/>
        <input type="text" name='email' placeholder='email' required />
        <input type="submit" value="Add User" id="" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>id:{user.id} name:{user.name} email: {user.email}</li> )
        }
      </ul>
    </div>
  );
}

export default App;
