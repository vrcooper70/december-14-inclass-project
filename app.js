class Menu {
    constructor(item, price) {
        this.item = item;
        this.price = price;
        
    }

    question () {
        console.log("What would you like to order"); 

    }
}


class Appetizer extends Menu {
    constructor(item, price, isSpicy) {
        super(item, price);
        this.isSpicy = isSpicy;

        
    } 

    selectItem () {
        if(item == 'spring rolls' && isSpicy == false) {
            console.log(`You have ordered non-spicy ${item}! That will cost ${price}`);
        }
    }
}

let appetizer1 = new Appetizer('spring rolls', 4, false);
console.log(appetizer1.question());

let menuItem1 = new Menu('Sushi', 15);
console.log(menuItem1);


class mainDish extends Menu {
    constructor(item, price) {
        super(item, price);
    }
}

class Restaurant {
    constructor(name, address, city, state, phone) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phone = phone;
    }
}

class Burgers extends Restaurant {

constructor(name, address, city, state, phone, rating) {
super(name, address, city, state, phone);
this.rating = rating;


let item1 =  '1/4 lb. cheeseburger';
let item2 = 'California burger';
let item3 = 'Chocolate milkshake';
}

summary () {
console.log(`${this.name} is a ${this.rating} star restaurant located at ${this.address} in ${this.city}, ${this.state}.
and is well known for its 1/4 lb. cheeseburgers, and delicious chocolate milkshakes. Please call ${this.phone} for
for reservations.`)
}

}

let restaurant1 = new Restaurant('Barneys','123 Main St.','Berkeley', 'CA', '510-123-1234');
let burgerRestaurant1 = new Burgers('A+ Burger', '124 S. Main St', 'Berkeley', 'CA', '510-123-3333','5');
burgerRestaurant1.summary();