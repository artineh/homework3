//A function that takes at least three arguments and returns the result of some set of operations using those arguments

function function1(m,n,p,q) {
	return m*n+p*q
}

console.log (function1(1,2,3,4))

//A function that takes no arguments and returns something 

const a = "Hello"
function function2() {
	return a;
}
	console.log (a)

//A function that takes arguments, does something but does not return anything

function function3 (num) { 
    const z = num*6
    //console.log(z)
}
function3(6)

//A function that takes three strings and returns the string that is the longest

function function4 (sa, sb, sc) {
	if ((sa.length > sb.length) && (sa.length > sc.length)){
		return sa;
	} 	if ((sa.length < sb.length) && (sb.length > sc.length)){
		return sb;
	}
	else {
		return sc;
	}
	}

	console.log(function4("erqqqqqqq","ewwwrr","errr"));

	//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
	function function5 (x, y) {
	if (x === y){
		return 0;
	} 
	if (x > y){
		return 1;
	}
	if(y > x){
		return -1;
	}
}

console.log(function5(6,5));

//Create a multiply function (that multiplies the two given arguments together and returns the result)

function function6(xm, ym) {
  const fm = xm * ym;
	return fm;
}
console.log(function6("8", "4"))

//Create a divide function (that divides the first argument by the second and returns the result)

function function7(xd, yd) {
	fd = xd / yd;
	return fd;
}
console.log (function7("8","4"))
function q(no) { return no/2

}

//Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / 

function triangleArea(base , height) {
 return function7(function6(base,height), 2)


}

console.log (triangleArea(4,6));

//Create a function called numLength that takes a number and returns the number of characters in the number
function numLength (n) {
	if (n >= 10) {
		n = n/10;
		return 1+ numLength(n);
	} 
	else { 
		return 1;
	}

}
   
    console.log(numLength(242))

//Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1

function function9(st1,st2,num1)
{
	if((st1.length + st2.length) > num1 ) { 
	return 1;
}
else {return -1;
}
}
console.log(function9("hi", "world" , 10))

//Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1


function runStuff(numa,numb,stc) {
	if (stc === "rectangle") {
		return numa*numb;
	}
    if (stc === "triangle") {
    	return (numa*numb)/2;
    }
    else {return -1;}
}
console.log(runStuff(3,6,"triangle"))