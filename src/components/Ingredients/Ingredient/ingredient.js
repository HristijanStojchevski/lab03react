import React from "react";
import {Link} from "react-router-dom";

export default function Ingredient(props){

        return (
            <tr>
                <td scope="col" ><span text={ingredient.name}></span></td>
                <td scope="col" ><span text={ingredient.spicy}></span></td>
                <td scope="col" ><span text={ingredient.amount}></span></td>
                <td scope="col" ><span text={ingredient.veggie}></span></td>
                <td scope="col">
                    <Link to={`/ingredients/${ingredient.name}/edit`}> <button className="btn btn-sm btn-secondary">
                        <span className="fa fa-edit"/>
                        <span><strong>Edit</strong></span>
                    </button>
                    </Link>
                    <button className="btn btn-sm btn-outline-secondary ">
                        <span className="fa fa-remove"/>
                        <span><strong>Remove</strong></span>
                    </button>
                    <Link to={`/ingredients/${ingredient.name}/details`}>
                        <button className="btn btn-sm btn-outline-dark">
                            <span><strong>Details</strong></span>
                        </button>
                    </Link>
                </td>
            </tr>
        );
}