import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import RecipeForm from "./components/RecipeForm"
import Login from "./components/Login"
import Register from './components/Register';
import './App.css'
import ListOfRecipies from "./components/ListOfRecipies"


function App() {
  return (

    <div className="App">
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path='/register' component={Register} />
      <Route path="/recipes" component = {ListOfRecipies}/>
      <PrivateRoute path = "/protected" component = {RecipeForm}/>

    </div>
  );
}

export default App;



