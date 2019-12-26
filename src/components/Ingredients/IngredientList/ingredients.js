import React,{useState,useEffect} from "react";
import Ingredient from "../Ingredient/ingredient";
import {Link} from "react-router-dom";
import IngredientsService from "../../../repository/axiosIngredientsRepository";
import axios from "../../../axios-client/axios";
export default function Ingredients() {
    const [ingredients, setIngredients] = useState({});
    useEffect( () => {
        IngredientsService.fetchIngredients().then((data)=>{
            setIngredients(data);
            }
        )
        },[]);
    return (
        <div className="row">
            <h4 className="text-upper text-left">Ingredients</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Spicy</th>
                        <th scope="col">Veggie</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getAll(ingredients)}
                    </tbody>
                </table>
            </div>
            <Link to={"/ingredients/new"}>
            <button className="btn btn-outline-secondary">
                <span><strong>Add new ingredient</strong></span>
            </button>
            </Link>
        </div>
    );
}
const deleteIngredient = () => {

}

const getAll= (ingredients)=> {
    ingredients.map( (ingredient,index) => {
            return(
                <Ingredient oneIngredient={ingredient} key={index}/>
            );
    });
}