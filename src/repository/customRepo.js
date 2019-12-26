export const loadIngredients = () => {
    return [
        {
            "name": "salsa",
            "spicy": true,
            "amount": 100,
            "veggie": false
        },
        {
            "name": "cheese",
            "spicy": false,
            "amount": 50,
            "veggie": false
        },
        {
            "name": "tomato",
            "spicy": false,
            "amount": 3,
            "veggie": true
        },
        {
            "name": "mozzarella",
            "spicy": false,
            "amount": 100,
            "veggie": false
        },
        {
            "name": "egg",
            "spicy": false,
            "amount": 80,
            "veggie": false
        }
    ]
};

export const getConsultations = () => {
    const data = loadIngredients().reduce((acc, curr) => {
        if (!acc[curr.name]) {
            acc[curr.name] = {
                id: curr.name,
                spicy: curr.spicy,
                amount: curr.amount,
                veggie: curr.veggie
            };
        }
        acc[curr.name].push(curr);
        return acc;
    }, {});
    return Object.values(data);
};

