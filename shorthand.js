var firstName = "Stewie";
var lastName = "Griffin";

var person = {firstName, lastName}

console.log(person);

var show = "Family Guy";

var team = {person, show};

console.log(team);

var color = "red";
var speed = 10;
var drive = "go";
var car = {
    color,
    speed,
    [drive]: function(){
        console.log("vroom");
    },
    oldway:function(){
        console.log("This is the old way");
    },
    test(){
        console.log("testing function");
    }
};



console.log(car.color);
car[drive]();
car.oldway();
car.test();