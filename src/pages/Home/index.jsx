import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])
  const name = useRef()
  const email = useRef()
  const age = useRef()

  async function getUsers() {
    const response = await api.get('/users') // get all users
    setUsers(response.data)
  }

  async function registerUser() {
    const response = await api.post('/users', {
      name: name.current.value,
      email: email.current.value,
      age: age.current.value
    })
    setUsers([...users, response.data])
  }

   async function deleteUser(id) {
    await api.delete(`/users/${id}`)
    setUsers(users.filter(user => user.id !== id))
   }  

  useEffect(() => {
    getUsers()
  }, [])  // empty array means that this function will run only once


  return (

    <div className="container">
      <form >
        <h1>User Register</h1>
        <input placeholder='Name' name='name' type="text" ref={name}/>
        <input placeholder='Email' name='email' type="text" ref={email}/>
        <input placeholder='Age' name='age' type="text" ref={age}/>
        <button type="button" onClick={registerUser}>Register</button>
      </form>

      {users.map(user => (
        <div key={user.id} className="card">
          <div >
            <p>Name:  <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Age:   <span>{user.age}</span></p>
          </div>

          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} alt="Delete" />
          </button>

        </div>
      ))}


    </div>

  )
}

export default Home
