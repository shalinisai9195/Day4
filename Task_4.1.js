
// compare two objects without order

var obj = {name :"Juno", age: 5};
var obj1 = {age: 5, name : "Juno"};

var objnames = (obj.name && obj1.name)
var objages = (obj.age && obj1.age)

if(objnames == objages)
{
   console.log("Both equal");
}else
{
    console.log("Not equal");
}













