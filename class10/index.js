//Objects
//It used to store related data in key-value pairs.


// const variable={
//     key:value
// }


const person = {
    name: "Rakesh",
    age: 20,
    city: "Guwhati",
    // hobbies: ['Cooking', 'Traveling'],

    // address: {
    //     city: "Guwahati",
    //     state: "Assam"

    // },

    // greet: function () {
    //     console.log("Welcome to Assam");
    // }

}

// person.state = "Assam";
// person.age = 27;
// delete person.age;

// console.log(person.city);
// console.log(person["name"]);

// person.greet()

// for (let key in person){
//     console.log(key, person[key]);

// }

// console.log(Object.keys(person));
// console.log(Object.values(person));

// console.log(Object.entries(person));

const users = [
    {
        id: 1,
        name: "Rakesh",
        age: 20,
        city: "Guwahati"
    },
    {
        id: 2,
        name: "Sameer",
        age: 22,
        city: "Guwahati"
    },
    {
        id: 3,
        name: "Shivam",
        age: 21,
        city: "Guwahati"
    }
]


// console.log(users[0].name);

users.map((user)=>{
    console.log(user.name);
})




