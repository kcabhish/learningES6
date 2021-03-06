var add = function(num1,num2){
    return num1 + num2;
}

//This arrowAdd function will work the same as add
var arrowAdd = (num1, num2) => num1 + num2;

console.log(add(2,3));
console.log(arrowAdd(3,3));






var sampleObject = {
    name : "Stewie Griffin",
    
    says : function(msg,func){
        func(msg);
    },
    
    run : function(){
        this.says(" 'What the duce' ",msgs => console.log(msgs + this.name));
    }
    
    /*
    if we were not using the => feature then the run function would look something like this
    run : function(){
       var that = this;
       this.says ("'What the duce'", function(msgs){
          console.log(msgs + that.name);
       })
    }
    */
};

sampleObject.run();