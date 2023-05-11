import './App.css'

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // const password = form.password.value;
    const user = { name, email }
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          alert('User Added Successfully');
          form.reset();
        }
      })
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder='name' />
        <br />
        {/* <input type="password" name="password" id="" placeholder='password' />
        <br /> */}
        <input type="email" name="email" id="" placeholder='email' />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  )
}

export default App
