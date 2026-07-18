async function getUsers() {
    try {
        const response = await fetch('https://jsonplacehold.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}


getUsers();


// steps to call the api and handle the response:

// getuser()-> 
// async function starts->
// await fetch()-> 
// wait for server response->
// response recived->
// await response.json()->
// convert json to js object->
// log the data->

// if error occurs->
// catch block executes->

// API
// GET,
// POST 
// PUT,
// DELETE
// PATCH

// user:
//     name
//     email
//     dob 25years/ 27years
//     hobbies


