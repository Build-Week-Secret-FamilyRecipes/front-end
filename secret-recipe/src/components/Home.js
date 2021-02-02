import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/bg.jpg'
import img1 from '../images/01.jpg'
import img2 from '../images/02.jpg'
import img3 from '../images/03.jpg'
import img4 from '../images/04.jpg'
import img5 from '../images/05.jpg'
import img6 from '../images/06.jpg'


const Home = () => {

    return(
        <StyledPage>

        <TopContainer>

            {/* <TLH2><Span>Secret Family Recipes</Span>, your place for generation after generation of tradition</TLH2>    TLH2 = TOP LEFT H2 */}
    
            <BackgroundImg src={backgroundImage}/>

        </TopContainer>


           <RightBottom>


               <TopDiv>
                    <H1>Anyone can go out and buy a cookbook these days, but you want a place to store all your secret family recipes, handed down from generation to generation.</H1>
                    <p>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep my recipes with me forever!</p>
                    <Button>Learn More</Button>
               </TopDiv>



               <BottomDiv>

                <H2>Some of our favorite recipes</H2>

                   <ParDiv>

                        <IndivPars>
                            <Img src={img1}/>
                            <h4>Magna sed consequat tempus</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <Img src={img2}/>   
                            <h4>Ultricies lacinia interdum</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <Img src={img3}/>
                            <h4>Tortor metus commodo</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <Img src={img4}/>
                            <h4>Quam neque phasellus</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <Img src={img5}/>
                            <h4>Nunc enim commodo aliquet</h4>
                            <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                        </IndivPars>

                        <IndivPars>
                            <Img src={img6}/>
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
    position:inherit;
    display:flex;
    color:red;
    border:2px solid red;
    width:15rem;
    height:5rem;
 

`

const Span = styled.span`
    font-weight:bolder;
    color:white;

`

const TopContainer = styled.div`
    position:absolute;
    height:100%;
    width:100%;
`

const TopDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin:10% 10%;
    width:80%;
    position:relative;
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
    position:absolute;
    width:65%;
    margin-left:35%;
    margin-top:2rem;
    padding-bottom:2rem;
`

const BottomDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:65%;
    position:relative;
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
  width:70%;
`
const TLH2 = styled.h2`
    text-align:right;
    font-size:1rem;
    position: fixed;
    width:70%;
    margin-left:-20%;
    color:red;
    text-shadow:1px 1px 40px white;
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
    width:35%;
    padding-bottom:5rem;
    font-size:.8rem;

`

const BackgroundImg = styled.img`
    position:fixed;
    background-repeat:no-repeat;
    width:auto;
    height:100%;

    
`


const Img = styled.img`
    height:100%;
    width:100%;
    border-radius:8px;
`

const ButtonBottom = styled.button `
    border:2px solid lightgray;
    border-radius:8px;
    padding:1.5rem;
    background:none;
    font-size:.8rem;
    width:25%;
    margin-bottom:3rem;
`
