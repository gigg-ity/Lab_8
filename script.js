let person = {
    name: "John",
    age: 30,
    isenrolled: true,
    greet: function(){
        console.log("Hi, my name is " + this.name + "and I am " + age);
    }

};


console.log(person.greet);