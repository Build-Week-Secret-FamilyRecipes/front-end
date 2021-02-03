import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/bg.jpg'



const HomeLeft = () => {

    return (
        <StyledPage>
            <StyledHeader>
                <Span>Secret Family Recipes</Span> your place for generation after generation of tradition
            </StyledHeader>
        </StyledPage>
    )
}

export default HomeLeft;



const StyledPage = styled.div`
    position:fixed;
    background-repeat:no-repeat;
    background-size:100%;
    background-image: url(${backgroundImage});
    width:35%;
    height:100%;
`

const StyledHeader = styled.h1`
    display:flex;
    flex-wrap:wrap;
    text-align:right;
    align-items:center;
    color:white;
    margin-left:10%;
    font-size:1.3rem;
    font-weight:400;
    justify-items:center;
    margin-top:50%;
    width:75%;
`

const Span = styled.span`
    font-weight:bolder;
    font-size:1.5rem;
`