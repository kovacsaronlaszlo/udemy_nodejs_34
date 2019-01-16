/* js basics */
// // var name = 'aron';
// const name = 'aron';
// // var age = 29;
// let age = 29;
// // var hasHobbies = true;
// const hasHobbies = true;
//
// age = 30;
//
// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return (
//         'Name is '
//         + userName
//         + ', age is '
//         + userAge
//         + ' and the user has hobies: '
//         + userHasHobby
//     );
// };
// // const add = (a,b) => a+b;
// // const addOne = a => a+1;
// const addRandom = () => 1+2;
//
// // console.log(add(1, 2));
// // console.log(addOne(3));
// console.log(addRandom());
// console.log(summarizeUser(name, age, hasHobbies));

/* ===================================================== */

/* js objects */
const person = {
    name: 'aron',
    age: 31,
    /* this function going to error */
    // greet: () => {
    //     console.log('hi, I am ' + this.name);
    // }
    /* right way below */
    // greet: function() {
    //     console.log('hi, I am ' + this.name);
    // }
    /* OR! */
    greet() {
        console.log('hi, I am ' + this.name);
    }
};
// person.greet();

/* ===================================================== */

/* js array & array methods */
const hobbies = ['sports','coding'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
/* map() return a new array */
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
/* turn this tutorial use many of array methods */

/* ===================================================== */

/* arrays, objects, reference types */
// hobbies.push('movie watching');
// console.log(hobbies);

/* ===================================================== */

/* spread & rest operators */
// const copiedArray = hobbies.slice(); // => [ 'sports', 'coding' ]
// const copiedArray = [hobbies]; // => [ [ 'sports', 'coding' ] ]
const copiedArray = [...hobbies]; // spread operator [...etc] // => [ 'sports', 'coding' ]
// console.log(copiedArray);

// at objects
const copiedPerson = {...person}; // { name: 'aron', age: 31, greet: [Function: greet] }
// console.log(copiedPerson);

// rest operator => ...args
const toArray = (...args) => {
    return args;
};
// console.log(toArray(1, 2, 3)); // => [ 1, 2, 3 ]
// console.log(toArray(1, 2, 3, 4)); // => [ 1, 2, 3, 4 ]

/* ===================================================== */

/* destructuring */
// const printName = (personData) => {
//     console.log(personData.name);
// };
// // this is object destructuring
const printName = ({ name }) => {
    console.log(name);
};
// printName(person);

// // object destructuring
const {name, age} = person;
// console.log(name, age);

// // array destructuring
const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

/* ===================================================== */

/* async code & promises */

// const fetchData = callback => {
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 1500);
    });
    return promise;
    // setTimeout(() => {
    //     callback('done!');
    // }, 1500);
};

// async code
setTimeout(() => {
    console.log('timer is done!');
    // fetchData(text => {
    //     console.log(text);
    // });
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    });
}, 2000);

// sync codes
console.log('hello');
console.log('hi');