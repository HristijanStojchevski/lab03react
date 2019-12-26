import axios from '../custom-axios/axios'
import qs from 'qs'

const IngredientsService = {
    fetchIngredients: ()=> {
        return axios.get("/api/ingredients");
    },
    fetchSpicyIngredients:()=> {
        data = {spicy: true}
        const params = qs.stringify(data);
        //return axios.get("/api/ingredients?spicy=true");
        return axios.get("/api/ingredients",params);
    }
    ,
    fetchIngredientsPaged:(page,pageSize,isSpicy=false)=>{
        data = {
            spicy: isSpicy
        }
        const formParams = qs.stringify(spicy);
        return axios.get("/api/ingredients","?spicy="+isSpicy.toString(),{
            headers: {
                'page':page,'page-size':pageSize
            }
        })
    },
    addIngredient: (ingredient) => {
        const data = {
            ...ingredient
        }
        const formParams = qs.stringify(data);
        return axios.post("/api/ingredients",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },
    getIngredientWithId: (ingredientId) => {
        return axios.get(`/api/ingredients/${ingredientId}`);
    }
    ,
    editIngredient: (ingredient) => {
        const data = {
            ...ingredient
        }
        const ingredientId= ingredient.name;
        const formParams = qs.stringify(data);
        return axios.patch("/api/ingredients/"+ingredientId,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },
    deleteConsultationTerm: (ingredientId) => {
        return axios.delete(`/api/ingredients/${ingredientId}`);
    },
    getPizzasWithIngredient: (ingredientId) => {
        return axios.get(`/api/ingredients/${ingredientId}/pizzas`);
    }
}

export default IngredientsService;