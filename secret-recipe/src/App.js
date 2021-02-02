import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import RecipeForm from "./components/RecipeForm"
import Login from "./components/Login"
import Register from './components/Register';
import './App.css'
import styled from 'styled-components';


function App() {
  return (

    <StyledApp className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute path = "/protected" component = {RecipeForm}/>
      <Header/>

    </StyledApp>
  );
}

export default App;



const StyledApp = styled.div`
  max-width:100%;
`