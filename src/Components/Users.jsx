import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully')
                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <div key={user._id}><p>{user.name} : <span>{user.email}</span> <Link to={`/update/${user._id}`}><button>Update</button></Link> <button onClick={() => handleDelete(user._id)}>delete</button></p></div>)
                }
            </div>
        </div>
    );
};

export default Users;