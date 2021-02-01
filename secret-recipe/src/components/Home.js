import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/bg.jpg'



const Home = () => {

    return(
        <StyledPage>

            <LeftTop>
                <TLH2><Span>Secret Family Recipes</Span>, your place for generation after generation of tradition</TLH2>

            </LeftTop>

           <RightBottom>

                <Nav><NavButtons>Sign In</NavButtons> <NavButtons>Sign Up</NavButtons></Nav>

               <TopDiv>
                    <H1>Anyone can go out and buy a cookbook these days, but you want a place to store all your secret family recipes, handed down from generation to generation.</H1>
                    <p>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep my recipes with me forever!</p>
                    <Button>Learn More</Button>
               </TopDiv>



               <BottomDiv>

                <H2>Some of our favorite recipes</H2>

                   <ParDiv>

                        <IndivPars>
                            <h4>Magna sed consequat tempus</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <h4>Ultricies lacinia interdum</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <h4>Tortor metus commodo</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <h4>Quam neque phasellus</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <h4>Nunc enim commodo aliquet</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <h4>Risus ornare lacinia</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                   </ParDiv>


                    <ButtonBottom>Look at this button</ButtonBottom>
               </BottomDiv>

           </RightBottom>

        </StyledPage>
    )
}

export default Home;



const StyledPage = styled.div`
    display:flex;
    flex-direction:row;
    font-weight:200;
    max-width:100%;
    max-height:100vh;
    

`

const LeftTop = styled.div `
    position:fixed;
    display:flex;
    max-width:30%;
    height:1280px;
    background-color:darkgray;
`

const Span = styled.span`
    font-weight:bolder;

`

const TopDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin:10% 10%;
    width:80%;
    padding-bottom:2rem;
    border-bottom:2px solid lightgrey;
    font-size:.8rem;

`


const Nav = styled.nav`
    margin:2% 0 1% 75%;
`

const NavButtons = styled.button`
    border:solid lightgray 1px;
    border-radius:8px;
    padding:12px 20px;
    background:none;
    margin:5px;
    
`


const RightBottom = styled.div`
    display:flex;
    flex-direction: column;
    align-content:center;
    align-items:center;
    width:80%;
    position:inherit;
    margin-left:30%;
    padding-bottom:2rem;
`

const BottomDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    align-items:left; 

`

const Button = styled.button`
    border:2px solid lightgray;
    border-radius:8px;
    padding:1.5rem;
    background:none;
    font-size:.8rem;
    margin-top:2rem;
    margin-bottom:2rem;
    width:20%;
`

const H1 = styled.h1`
`

const H2 = styled.h2`
  width:80%;
`
const TLH2 = styled.h2`
    margin-top:12rem;
    margin-left:5rem;
    text-align:right;
    max-width:70%;
    font-size:1rem;
    width:70%;
`

const ParDiv = styled.div`
    margin-top:2rem;
    display:flex;
    width:100%;
    align-items:center;
    flex-wrap:wrap;
    justify-content:left;
  
`

const IndivPars = styled.div`
    justify-content:space-evenly;
    padding-right:5rem;
    width:37%;
    padding-bottom:5rem;
    font-size:.8rem;

`

const ButtonBottom = styled.button `
    border:2px solid lightgray;
    border-radius:8px;
    padding:1.5rem;
    background:none;
    font-size:.8rem;
    width:25%;
`
