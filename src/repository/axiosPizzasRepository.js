import axios from '../custom-axios/axios'
import qs from 'qs'

const PizzasService = {
    fetchPizzas: ()=> {
        return axios.get("/api/pizzas");
    },
    getPizzasWithNoIngredients: (numberIngredients) => {
        data = {
            totalIngredients: numberIngredients
        }
        const params = qs.stringify(data);
        return axios.get("/api/pizzas",params);
    },
    getCommonIngredients: (pizza1Name, pizza2Name) => {
        data = {
            pizza1: pizza1Name,
            pizza2: pizza2Name
        }
        const params = qs.stringify(data);
        return get("/api/pizzas",params);
    }
    ,
    getPizzaWithId: (pizzaId) => {
        return axios.get(`/api/pizzas/${pizzaId}`);
    }
    ,
    addPizza: (pizza) => {
        const data = {
            ...pizza
        }
        const formParams = qs.stringify(data);
        return axios.post("/api/pizzas",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },
    editPizza : (pizza) => {
        const data = {
            ...pizza
        }
        const pizzaId= pizza.name;
        const formParams = qs.stringify(data);
        return axios.patch("/api/pizzas/"+pizzaId,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },
    deletePizza: (pizzaId) => {
        return axios.delete(`/api/pizzas/${pizzaId}`);
    }
}

export default PizzasService;