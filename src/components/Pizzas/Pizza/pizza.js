import React from "react";
import {Link} from "react-router-dom";

export default function Pizza(){
    return (
        <tr>
            <td scope="col">Mexicana</td>
            <td scope="col">Nice pizza description</td>
            <td scope="col">Ham,sausage,cheese</td>
            <td scope="col">False</td>
            <td scope="col">
                <Link to={"/pizzas/"+"name"+"/edit"}> <button className="btn btn-sm btn-secondary">
                    <span className="fa fa-edit"/>
                    <span><strong>Edit</strong></span>
                </button>
                </Link>
                <button className="btn btn-sm btn-outline-secondary ">
                    <span className="fa fa-remove"/>
                    <span><strong>Remove</strong></span>
                </button>
            </td>
        </tr>
    );
}