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


let { name, age, courses } = student;
console.log(name); 
console.log(courses[0]); 


let scores = [50, 60, 80, 90];
let [first, , third] = scores;
console.log(first); 
console.log(third); 


let clonedStudent = {name: "Ahmad", age: 29, graduationYear: 2027};
console.log(clonedStudent.graduationYear);
