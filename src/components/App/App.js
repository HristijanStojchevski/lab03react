import React from 'react';
import {BrowserRouter as Router,Redirect,Route} from "react-router-dom";
import Header from "../Header/header";
import Ingredients from "../Ingredients/IngredientList/ingredients";
import Pizzas from "../Pizzas/PizzaList/pizzas";
import Home from "../Home/home";
import IngredientAdd from "../Ingredients/IngredientAdd/ingredientAdd";
import IngredientEdit from "../Ingredients/IngredientEdit/ingredientEdit";
import './App.css';


function App() {
  return (

      <Router>
        <Header/>
          <main role="main" className="mt-3">

              <div className="container">
      <Route path={"/"} exact render={()=>
        <Home/>
      }/>
      <Route path={"/ingredients"} exact render={()=>
        <Ingredients/>
      }/>
      <Route path={"/pizzas"} exact render={()=>
        <Pizzas/>
      }/>
      <Route path={"/ingredients/new"} exact render={()=>
          <IngredientAdd/>
      }/>
      <Route path={"/ingredients/name/edit"} exact render={()=>
          <IngredientEdit/>
      }/>
          </div>
       </main>
      </Router>
  );
}

export default App;
