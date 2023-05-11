// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log({name, email}); 
    }
    return (
        <div>
            <h3>Information about: {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser.name}/>
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUser.email}/>
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;