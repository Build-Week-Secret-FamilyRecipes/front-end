import React, { useState } from 'react'
import axios from "axios"

const initialFormValues = {
    username: '',
    password: '',
    name: '',
    phone: '',
    email: '',
    age: ''
};

const Register = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const register = (e) => {
        e.preventDefault();
        axios.post('https://secret-family-recipes-be.herokuapp.com/api/auth/register', formValues)
        .then(res => {
            props.history.push('/login');
            console.log('register post: ', res.data);
        })
        .catch(err => {
            console.log('register error: ', err)
        })
    }

    return(
        <div>
            <form onSubmit={register}>
                <label>Username</label>
                <input
                type='text'
                name='username'
                value={formValues.username}
                onChange={handleChange}
                /><br></br>
                <label>Password</label>
                <input
                type='password'
                name='password'
                value={formValues.password}
                onChange={handleChange}
                /><br></br>
                <label>Real Name</label>
                <input
                type='text'
                name='name'
                value={formValues.name}
                onChange={handleChange}
                /><br></br>
                <label>Phone Number</label>
                <input
                type='text'
                name='phone'
                value={formValues.phone}
                onChange={handleChange}
                /><br></br>
                <label>Email</label>
                <input
                type='email'
                name='email'
                value={formValues.email}
                onChange={handleChange}
                />
                <label>Age</label>
                <input
                type='number'
                name='age'
                value={formValues.age}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register;