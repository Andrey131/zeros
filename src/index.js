module.exports = function getZerosCount(number) {
var x=0;
var i=0;
var i1=0;

while(number>=5)
{
	while(number%5!=0){
	number--;
}
  	x=x+number/5;
  	number=number/5;
}


return x;
}
