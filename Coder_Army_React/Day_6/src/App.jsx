import { useState } from "react"

function App() {

  const [users, setUsers] = useState([])

  async function getUsers() {
    const response = await fetch("https://api.github.com/users")
    const data = await response.json()
    setUsers(data);
    console.log(data);
    console.log("hello");
  }

  getUsers();

  return (
    <>

      <h1>Github Users</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>

        {
          users.map(user => (
            <img src={user.avatar_url} height={100} width={100} key={user.login} />
          ))
        }

      </div>




    </>
  )
}

export default App;