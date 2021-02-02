import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from 'styled-components'



function Header() {
  

    return (
        <StyledHeader class='header'>
            <Form className = "search-bar">
                <Input placeholder='Search Here!' className = "bar">
                </Input>
                <Button>Search</Button>
            </Form>
            <Link class='linkButtons' to="/">Home</Link>
            <Link class='linkButtons' to="/login">Login</Link>
            <Link class='linkButtons' to='/register'>Register</Link>
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
    background:rgba(255,255,255, .5);
    border-radius:8px;
    font-weight:bolder;
    font-size:1rem;
    backdrop-filter: blur(5px);
    color:black;
    margin:auto 2px;
    border:solid 1px transparent;
    background-clip: padding-box;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .05);
`

const Button = styled.button`
    padding: .5rem 2rem;
    background:rgba(255,255,255, .5);
    border-radius:8px;
    font-size:1rem;
    backdrop-filter: blur(5px);
    margin:auto 2px;
    border:solid 1px transparent;
    background-clip: padding-box;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .05);

`