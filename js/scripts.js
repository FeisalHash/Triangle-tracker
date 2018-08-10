function getTypeOfTriangle(){
  var side1= parseFloat(prompt("Please input side 1"));
  var side2= parseFloat(prompt("Please input side 2"));
  var side3= parseFloat(prompt("Please input side 3"));
if(side1===side2 && side1===side3 && side2===side3) {
  alert("This is an Equilateral: All sides are equal.")
}
else if(side1===side2 || side1===side3 || side2===side3) {
alert("Isosceles: Exactly 2 sides are equal.");
}
else if((side1+side2)<= side3 || (side1+side3)<=side2 || (side2+side3)<=side1){
alert("NOT a Triangle");
}
else{
alert("Scalene: No sides are equal.");
}
}
