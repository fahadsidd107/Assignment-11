// Chapter # 26-30:

// Question 1:

// var a =prompt("Enter your value");
// document.write("Number :"+ Math.abs(a)+"<br>");
// document.write("Round off value :"+Math.round(a)+"<br>");
// document.write("Floor Value :"+Math.floor(a)+"<br>");
// document.write("Ceil Value :"+Math.ceil(a)+"<br>");

// Question 2:

// var a =prompt("Enter your value");
// document.write("Number : "+ -Math.abs(a)+"<br>");
// document.write("Round off value : "+ -Math.round(a)+"<br>");
// document.write("Floor Value : "+ -Math.floor(a)+"<br>");
// document.write("Ceil Value : "+ -Math.ceil(a)+"<br>");

// Question 3:

// var a =prompt("Enter your value");
// document.write("Number : "+ Math.abs(a)+"<br>");

// Question 4:

// document.write("Random Dice Value : "+ Math.round(Math.random()*5+1) +"<br>");
// document.write("Random Dice Value : "+ Math.round(Math.random()*5+1) +"<br>");

// Question 5:

// var a=Math.round(Math.random()*1+1);
// document.write(""+a+"<br>");
// if (a==2){
//     document.write(" Random Coin Value : Heads");
// }
// else{
//     document.write(" Random Coin Value : Tails");
// }

// Question 6:

// document.write("Random Value between 1-100 : "+ Math.round(Math.random()*99+1) +"<br>");

// Question 7:

// var a =+prompt("Enter your weight in Kilograms");
// var b = parseFloat(a)
// document.write("The weight of user is "+b+" kgs");

// Question 8:

// var b =+prompt("Enter your Number from 1-10");
// var a=Math.round(Math.random()*9+1);
// document.write("The Magic Number is "+a+"<br>");
// if (a==b){
//     document.write("Congrats");
// }
// else{
//     document.write("Try Again");
// }


// Chapter # 31-34:

// Question 1:

// var now=new Date();
// document.write(now);

// Question 2:

// var monthsList=["january","february","march","april","may","june","july","august","september","october","november","december"];
// var now=new Date();
// var month=now.getMonth();
// var currentMonth=monthsList[month];
// alert(currentMonth);

// Question 3:

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday.slice(0,3));

// Question 4:

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday=="Sunday" || nameOfToday=="Saturday"){
//         document.write("it's fun day");
//     }
//     else{
//         document.write("week Day");
//     }

// Question 5:

// var d=new Date();
// var day=d.getDate();
// if(day<=15){
//     document.write("first fifteen days of the month");
// }
// else{
//     document.write("last days of the month");
// }

// Question 6:

// var d=new Date();
// var ms=d.getTime();
// var min=d.getTime()/60000;
// document.write("Current Date: "+d+"<br>");
// document.write("Elapsed milliseconds since january 1, 1970: "+ms+"<br>");
// document.write("Elapsed minutes since january 1, 1970: "+min);

// Question 7:

// var d= new Date();
// var hrs=d.getHours();
// if(hrs=0){
//     document.write("Midnight");
// }
// if(hrs>=1 || hrs<12){
//     document.write("its AM");
// }
// else{
//     document.write("its PM");
// }

// Question 8:

// var laterDate = new Date("December 31, 2020");
// document.write("Later date:"+laterDate+"<br>");

// Question 9:

// var startDate = new Date("June 18, 2015");
// var today = new Date();
// var secToday = today.getTime();
// var secRam = startDate.getTime();
// var diff = secToday - secRam ;
// var days = diff / (1000 * 60 * 60 * 24);
// var daysfinal=Math.floor(days)
// document.write(daysfinal+" days have past since "+startDate+"<br>");

// Question 10:

// var ref = new Date("Dec 05, 2015");
// var begin = new Date("Dec 01, 2015");
// var beg = begin.getTime();
// var refdate = ref.getTime();
// var diff = refdate - beg ;
// var secs = diff / (1000);
// var finalsecs=Math.floor(secs)
// document.write("On reference date "+ref+", "+finalsecs+" Seconds had passed since the begining of 2015"+"<br>");

// Question 11:

// var rightNow = new Date();
// var newd=rightNow.setHours()
// document.write("Current Date "+newd+"<br>")
// document.write("1 hour ago it was Date "+rightNow+"<br>")

// Question 12:

// var d = new Date();
// document.write("Current Date "+d+"<br>");
// var dd=d.setFullYear(1921);
// document.write("100 years back, it was "+d+"<br>");

// Question 13:

// var a=+prompt("Whats your age?")
// var present = new Date();
// var year=present.getFullYear()
// byear=year - a;
// document.write("Your age is "+a+"<br>");
// document.write("Your birth Year is "+byear+"<br>");


// Question 14:

// var d= new Date();
// var monthlst = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];
// monthnum=d.getMonth()
// var month = monthlst[monthnum];
// var namec=prompt("Please Enter Your Name?")
// var unitno=+prompt("Please Enter Your Number Of Units?")
// document.write("K-ElectricBill"+"<br>")
// document.write("Customer Name: "+ namec+"<br>")
// document.write("Month: "+month+"<br>");
// document.write("Number Of Units:"+unitno+"<br>");
// document.write("Charges Per Unit: 16"+"<br>");
// var payable=unitno*16
// document.write("Net Amount Payble (within Due Date):"+ payable+"<br>");
// document.write("Late Payment Surcharge: 350"+"<br>");
// var payabledue= payable+350
// document.write("Gross Amount Payble (after Due Date):"+ payabledue+"<br>");


// Chapter # 35-38:

// Question 1:

// function time(){
//     var a = new Date();
//     document.write(a);
// }
// time();

// Question 2:

// function greeting(){
//     var a=prompt("Enter Your First name:")
//     var b=prompt("Enter you Last name:")
//     document.write("Hello "+a+" "+b+", Have a nice day")
// }
// greeting();

// Question 3:

// function add(a,b){
//     var a=+prompt("Enter Your First Number:")
//     var b=+prompt("Enter you Last Number:")
//     var c =a+b;
//     return c;
// }
// document.write("The sum of two number will be "+add());

// Question 4:

// function calc(){
//     var a=+prompt("Enter Your First Number:")
//     var b=+prompt("Enter you Last Number:")
//     var op=prompt("Enter the symbol of operation you want to perform ( like +,-,*,/,%)")

// if(op==="+"){
//     return (a+b);
// }
// else if(op==="-"){
//     return (a-b);
// }
// else if(op==="*"){
//     return (a*b);
// }
// else if(op==="/"){
//     return (a/b);
// }
// else if(op==="%"){
//     return (a%b);
// }
// }
// document.write("The result of your operation is "+calc())

// Question 5:

// function sqr(a){
// var b= Math.pow(a,2);
// return b;
// }
// document.write("The Square of your given number number is "+sqr(5));

// Question 6:

// function fact(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }else{
//         return n * fact(n-1);
//     }
// }
// alert("The factorial is " + fact(6));


// Question 7:

// function printCounting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write(i+"<br>");
//     }
// }
// printCounting(1,25);

// Question 8:

// function calculateSquare(a){
//  return Math.pow(a,2)
// }
// function calculateHypotenuse(Base,Perdendicular){
//  var Hypotenuse=calculateSquare(Base)+calculateSquare(Perdendicular)
//  var sqrtHypotenuse=Math.sqrt(Hypotenuse)
//  alert(sqrtHypotenuse)
// }
// calculateHypotenuse(4,3);

// Question 9:

// function area(width,height){
//     var Area= width*height;
//     return Area;
// }
// document.write("Area of Rectangle is "+area(5,6));

// Question 10:

// function checkPalindrome(str) {
//     var a = string.split("");
//     var b = a.reverse();
//     var c = b.join("");
//     if(string == c) {
//         alert('It is a palindrome');
//     }
//     else {
//         alert('It is not a palindrome');
//     }
//     document.write(a)
// }
// var string = prompt('Enter a string: ');
// checkPalindrome(string);

// Question 11:

// function titleCase(str) {
//     var a = str.toLowerCase().split(" ");
//     for (var i = 0; i < a.length; i++) {
//         a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1,a[i].length);     
//     }
//     return a.join(" "); 
//  }
//  document.write(titleCase("the quick brown fox"));

// Question 12:

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// document.write(longestWord("Web Development Tutorial"));

// Question 13:

// function charCount(str, letter) 
// {
//  var letterCount = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }
// document.write(charCount("JSResourceS.com", "o"));

// Question 14:

// function calcCircumference(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumference is " + y + "<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x);
//   }
//   calcCircumference(10);
//   calcArea(12);

// Chapter # 38-42:

// Question 1:

// function varPower(a,b){
//     document.write(Math.pow(a,b));
// }
// varPower(2,3);

// Question 2:

// function leapYear(){
//     var year=+prompt("Enter year: ");
//     if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//         document.write("leap year");
//     }
//     else{
//         document.write("not a leap year");
//     }
// }
// leapYear();

// Question 3:

// function area() {
//     var a = 6;
//     var b = 6;
//     var c = 6;
//     var s;
//     function inner() {
//         s = (a + b + c) / 2;
//     }
//     inner()
//     var area = s * (s - a) * (s - b) * (s - c)
//     document.write("the area of triangle is " + area)
// }
// area()

// Question 4:

// function main() {
//     var a = +prompt("enter the 1 subject marks");
//     var b = +prompt("enter the 2 subject marks");
//     var c = +prompt("enter  the 3 subject marks");
//     document.write("Mark sheet of a Student: "+"<br>");
//     function average() {
//         var average = (a+b+c)/2;
//         document.write( "average: "+average+"<br>");
//     }
//     average()
//     function percentage() { 
//         var percentage =  ((a+b+c)/300)*100;
//         document.write( "percentage is = " + percentage );        
//     }
//     percentage();
// }
// main();

// Question 5:

// function index() {
//     var a = prompt("enter a letter");
//     var name = "shahzaib";
//     for (var i=0 ; i<name.length ; i++){
//         var sel = name.charAt(i);
//         switch (true){
//             case ( input == sel):
//             document.write( "your character " + a + "on my sentence at index = " +i);
//             var i=num.length;
//             case (i== name.length):
//             console.log ("-1");
//         }
//     }
// index();

// Question 6:

// function remove() {
//     var a =prompt("enter the sentence");
//     var b=a.replace(/[aeiou]/gi, '');
//     document.write(b);
// }
// remove();


// Question 7:

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   document.write("the count of vowels appearing twice is " + findOccurrences());

// Question 8:

// var distanceInKm=+prompt("distance between two cities in km: ");
// function meters(){
//     var m=distanceInKm*1000;
//     document.write("meters: "+m+"<br>");
// }
// function feet(){
//     var m=distanceInKm*3281;
//     document.write("feet: "+m+"<br>");
// }
// function inches(){
//     var m=distanceInKm*39370;
//     document.write("inches: "+m+"<br>");
// }
// function centimeters(){
//     var m=distanceInKm*100000;
//     document.write("centimeters: "+m);
// }
// meters();
// feet();
// inches();
// centimeters();

// Question 9:

// var empCount=1;
// while(empCount<=4){
// var workingHours=+prompt("enter working hours of employee "+empCount+ ": " );
// if(workingHours>40){
//     var overTime=workingHours-40;
//     var overTimePay=overTime*12;
//     document.write("employee no " +empCount+ " overtime pay is: " +overTimePay+ "<br>");
// }
// else{
//     document.write("employee no " +empCount+ " you have to work for more than 40 hours to get over time pay"+"<br>");
// }
// empCount++;
// }

// Question 10:

// var amount= +prompt("enter amount to be withdrawn (in hundreds): ");
// var h=amount/100;
// var f=(amount%100)/50;
// var t=(((amount%100)%50)/10);
// var r=(((amount%100)%50)%10);
// document.write("notes of RS.100: "+h+"<br>");
// document.write("notes of RS.50: "+ f+"<br>");
// document.write("notes of RS.10: "+ t+"<br>");
// document.write("remaining amount: "+ r);
