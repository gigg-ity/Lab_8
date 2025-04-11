let student = {
    name: "Ahmad",
    age: 29,
    courses: ['Web development', 'Javascript', 'Operating Systems', 'Database Management'],
    isenrolled: true,
    greet: function(){
        console.log("Hi, my name is " + this.name + "and I am " + this.age);
    }

};

console.log(student.age);
console.log(student.name);
console.log(student.greet());

let jsonStringObject = '{"name":"Ahmad","age":29}';
let jsonObj = JSON.parse(jsonStringObject);
console.log(jsonObj.name);