import React, { useState } from 'react'
import axios from "axios"

const initialFormValues = {
    username: '',
    password: '',
    name: '',
    phone: '',
    email: '',
    age: null
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
        <div class="registrationForm">
            <form onSubmit={register}>
                <label>Username</label>
                <input
                type='text'
                name='username'
                value={formValues.username}
                onChange={handleChange}
                />
                <label>Password</label>
                <input
                type='password'
                name='password'
                value={formValues.password}
                onChange={handleChange}
                />
                <label>Real Name</label>
                <input
                type='text'
                name='name'
                value={formValues.name}
                onChange={handleChange}
                />
                <label>Phone Number</label>
                <input
                type='text'
                name='phone'
                value={formValues.phone}
                onChange={handleChange}
                />
                <label>Email</label>
                <input
                type='email'
                name='email'
                value={formValues.email}
                onChange={handleChange}
                />
                <label>Age</label>
                <input
                type='text'
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

