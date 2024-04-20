// const tinderUser = new Object();
const tinderUser = {} // Both ways are correct
// console.log(tinderUser); //{}

tinderUser.id = "fjbfu438ty";
tinderUser.name = "Agyat";
tinderUser.isLoggedIn = true;
// console.log(tinderUser); //{ id: 'fjbfu438ty', name: 'Agyat', isLoggedIn: true }

const regularUser = {
    email: "ad@agyat.com",
    Name: {
        userName: {
            firstName: "Agyat",
            lastName: "Aadarsh"
        }
    }
}

// console.log(regularUser.Name.userName.lastName); //Aadarsh


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2); // blank paranthesis denotes target: first element in assign is for the target and after that the sources.
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = {...obj1, ...obj2}; // Assigning using spread operator.
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] returns the keys of the object in array format
// console.log(Object.values(tinderUser)); // [ 'fjbfu438ty', 'Agyat', true ] returns the values of the object in array format
// console.log(Object.entries(tinderUser)); //[ [ 'id', 'fjbfu438ty' ], [ 'name', 'Agyat' ], [ 'isLoggedIn', true ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); //false


// Object Destructuring
const course = {
    courseName: "Blogging A-Z",
    price: "1799",
    courseInstructor: "Agyat"
}

const {courseInstructor} = course; // Destructuring object
console.log(courseInstructor); // Agyat

const {courseInstructor: instructor} = course; // Destructuring object with different name
console.log(instructor); // Agyat