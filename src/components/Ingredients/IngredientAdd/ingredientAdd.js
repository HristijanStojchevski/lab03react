import React from "react";


export default function IngredientAdd(){

    const onFormSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <div>
            <div className="card-body">
                <div className="card-text">

                <form onSubmit={onFormSubmit}>
            <div className="row form-group">
                <div className="col-md-6 font-weight-bold"> Name:</div>
                <div className="col-md-6">
                            <input name={"ingredientName"} type="text"
                                   className="form-control"
                                   title="Name"/>

                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-6 font-weight-bold"> Amount:</div>
                <div className="col-md-6">
                    <input name={"ingredientAmount"} type="text"
                           className="form-control"
                           title="Amount"/>

                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-6 font-weight-bold"> Spicy:</div>
                <div className="col-md-6">
                    <select name={"isSpicy"} className="form-control">
                        <option value={"TRUE"}>Spicy</option>
                        <option value={"FALSE"}>Not Spicy</option>
                        </select>
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-6 font-weight-bold"> Veggie:</div>
                <div className="col-md-6">
                    <select name={"isVeggie"} className="form-control">
                        <option value={"TRUE"}>Vegetarian</option>
                        <option value={"FALSE"}>Not vegetarian</option>
                    </select>
                </div>
            </div>
            <div className="col-md-12 text-right">

                <button type="submit" className="btn btn-primary" title="Save">
                    <i className="fa fa-fw fa-save"></i> Save
                </button>
            </div>
        </form>
                    <hr/>
                </div>
            </div>

        </div>
    );
}