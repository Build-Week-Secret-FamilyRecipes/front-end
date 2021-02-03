import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from 'styled-components'



function Header() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href =  '/';
      }; 

  

    return (
        <StyledHeader className='header'>
            <Form className = "search-bar">
                <Input placeholder='Search Here!' className = "bar">
                </Input>
                <Button>Search</Button>
                <Button onClick = {logout}>Logout</Button>
            </Form>
            <Link className='linkButtons' to="/">Home</Link>
            <Link className='linkButtons' to="/login">Login</Link>
            <Link className='linkButtons' to='/register'>Register</Link>
            <Link className='linkButtons' to="/recipes">Recipes</Link>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    background:none;
    display:flex;
    position:fixed;
    margin:0 0 0 44.8%;
    padding:1rem;

`



const Form = styled.form`
    background:none;

`




const Input = styled.input`
    padding:.5rem 2rem;
    background:none;
    border-radius:8px;
    border:1px solid lightgray;
    font-weight:bolder;
    


`

const Button = styled.button`
    padding: .5rem 2rem;
    background:none;
    border: 1px solid lightgray;
    border-radius:8px;

`