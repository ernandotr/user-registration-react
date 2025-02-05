import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '1',
      name: 'Lavinia',
      email: 'lavinia@gmail.com',
      age: 22
    },
    {
      id: '2',
      name: 'Ernando',
      email: 'ernando@gmail.com',
      age: 41
    }
  ]

  return (

    <div className="container">
      <form >
        <h1>User Register</h1>
        <input placeholder='Name' name='name' type="text" />
        <input placeholder='Email' name='email' type="text" />
        <input placeholder='Age' name='age' type="text" />
        <button type="button">Register</button>
      </form>

      {users.map(user => (
        <div key={user.id} className="card">
          <div >
            <p>Name:  <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Age:   <span>{user.age}</span></p>
          </div>

          <button>
            <img src={Trash} alt="Delete" />
          </button>

        </div>
      ))}


    </div>

  )
}

export default Home
