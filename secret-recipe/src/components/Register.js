import React, { useState } from 'react'
import axios from "axios"
import styled from 'styled-components';

const initialFormValues = {
    username: '',
    password: '',
    name: '',
    phone: '',
    email: '',
    age: null
};

const initialTerms = {
    terms: false,
}

const Register = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [terms, setTerms] = useState(initialTerms)

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const flipTerms = () => {
        if(!terms) {
            setTerms(true);
        }
        else if(terms) {
            setTerms(false);
        }
        console.log(terms);
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
            <StyledForm onSubmit={register}>
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
                <div>
                    <label>terms and stuff</label>
                    <input 
                    type='checkbox'
                    name='terms'
                    checked={terms.terms}
                    onChange={flipTerms}
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </StyledForm>
        </div>
    )
}

export default Register;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: black 3px solid;
  border-radius: 10px;
  margin: auto;
  padding: 1rem;
  width: auto;
  .warning {
    color: red;
    font-weight: bold;
  }
  .inputItem {
    margin: 0.5rem;
  }
  .inputTerms {
    margin: 0.5rem 0.5rem 0 0;
    display: flex;
    flex-direction: row-reverse;
  }
  .inputItem label {
    float: left;
  }
  .inputItem input {
    width: 100%;
    margin-top: 0.5rem;
    box-sizing: border-box; // needed to make input box fit inside div
  }
  .inputItem button {
    float: right;
    width: 5rem;
  }
`;