/* const obj = {
    name: "King",
    age: 25,
    skills: ['JS', 'React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    intro: function() {
        return "hi this is " + this.name 
    }
}

console.log(obj.intro()); */

const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25
}
const person1 = {
    fullname: function(){
        return this.fname + " " + this.lname;
    }
}


let x = person1.fullname.call(person);
console.log(x);
