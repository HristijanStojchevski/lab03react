import React from "react";
import Pizza from "../Pizza/pizza";
import {Link} from "react-router-dom";
export default function Pizzas() {



    return (
        <div className="row">
            <h4 className="text-upper text-left">Pizzas</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Descripiton</th>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Veggie</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getAll()}
                    </tbody>
                </table>
            </div>
            <Link to={"/pizzas/new"}>
                <button className="btn btn-outline-secondary">
                    <span><strong>Add new pizza</strong></span>
                </button>
            </Link>
        </div>
    );
}

const getAll= ()=> {
    return(
        <Pizza/>
    );
}