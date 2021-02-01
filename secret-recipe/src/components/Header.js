import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from 'styled-components'



function Header() {
    return (
        <StyledHeader>
            <Form className = "search-bar">
                <Input placeholder='Search Here!' className = "bar">
                </Input>
                <Button>Search</Button>
            </Form>
            <Link class='linkButtons' to="/">Home</Link>
            <Link class='linkButtons' to="/login">Login</Link>
            <Link to='/register'>Register</Link>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div`
    display:flex;
    position:fixed;
    margin:0 0 0 50%;
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


`

const Button = styled.button`
    padding: .5rem 2rem;
    background:none;
    border: 1px solid lightgray;
    border-radius:8px;

`