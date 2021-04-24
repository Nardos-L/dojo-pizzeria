// returns a piza with pizza parameters.
function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//returns an array of pizza toppings.
function pizzaToppings(){
    var arrOfToppings =[["deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]],
                    ["hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]],
                    ["ultra thin", "pepper sauce", ["Cheddar","Provolone"],["olives", "onions","chicken"]],
                    ["Flatbread Crust","White sauce",["Parmesan" ,"Provolone"],["pepperoni"]]
    ]
    return arrOfToppings;
}

//generates a random number.
function randomPizza() {
    var index = Math.floor(Math.random()*4);
    return index;
}

// displays a pizza
function displayPizza(){
    var index = randomPizza();
    var arr = pizzaToppings();
    var pizza = pizzaOven(arr[index][0],arr[index][1],arr[index][2],arr[index][3]);
    console.log(pizza);
    return pizza;
}

// call back the displayPizza function 
displayPizza();


 