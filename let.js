'use strict';
//Let is not allowed outside the strict mode

var fs = [];

for (var i = 0;i< 10 ; i++){
    fs.push(function(){
        console.log(i);
    })
}

//This will display all values as 10 because the value of i is 10 from the last
//iteration
fs.forEach(function(x){
    x();
});

var fs2=[];
for (let j = 0;j< 10 ; j++){
    fs2.push(function(){
        console.log(j);
    })
}

fs2.forEach(function(x){
    x();
})
