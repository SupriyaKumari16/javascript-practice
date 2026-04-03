 //conditional statement
// logconsole("before the if statement");
// let age=14;
// if(age>=18){
//     console.log("you can vote");
// }
// if(age<=18){
//     console.log("you can't vote");
// }
// console.log("after the if statement");
// if(age<18){
//     console.log("you are in teen age");
// }


// //practice question of if statement
// let color1="red";
// if(color1=="red"){
//     console.log("vehicles are stop");
// }
// let color2="yellow";
// if(color2=="yellow"){
//     console.log("vehicles are waiting");
// }
// let color3="green";
// if(color3=="green"){
//     console.log("vehicles are moving");
// }


// //elseif statement
// let marks=20;
// if(marks>=90){
// console.log("A+");
// }
// else if(marks>=80){
//     console.log("B+");
// }
// else if(marks>=60){
//     console.log("c");
// }
// else if(marks>=50)
// {
//     console.log("average");
// }
// else{
//     console.log("fail");
// }

// //practice question
// let size='XL';
// if(size==='XL'){
//     console.log("popcorn price is 250");
// }
// else if(size==='L'){
//     console.log("popcorn price is 200");
// }
// else if(size==='M'){
//     console.log("popcorn price is 100");
// }
// else if(size==='S'){
//     console.log("popcorn price is 50");
// }
// else{
//     console.log("size is not avaible");
// }


// //nested if else
// let marks=85;
// if(marks>=33){
//     console.log("pass");
//     if(marks>=80){
//         console.log("grade:A+");
//     }
//     else{
//         console.log("grade:A")
//     }
// }
// else{
//     console.log("better luck next time");
// }

// // //logical operators
// // //and
// let marks=90;
// if(marks>=33&&marks>=80){
//     console.log("pass");
// console.log("grade:A+");
// } else{
//     console.log("better luck next time");
//     }

// //or
// let marks=58;
// if((marks>=33)&&(marks<=80)||(!false)){
//     console.log("pass");
// }

// //practice question

// let string='aamang';
// if(string[0]==='a'&&string.length>3){
//     console.log("string is a good");
// }
// else{
//     console.log("string is not good");
// }

// //practice code
// let  num=12;
// if((num%3===0)&&((num+1==15)||(num-1==11))){
//     console.log("safe");
// }
// else{
//     console.log("unsafe");
// }

// //alert and prompt
// //alert....
// alert("something is wrong");//jb hum alert use krte hai tb sirf notification aayega .
// console.log("something is wrong"); //jb hum console.log mai use krenge toh wo print krega console mai pehle notification aayega phr print krega.
// error
// console.error("this msg is find error");//ye jb hume error ko print krwana  hai uske symbol k sath.
// warm
// console.warn("this msg is find warning");//ye jb hum warning ko show/print krwana chahte hai.

// //prompt....
// prompt("Enter your name");//only prompt use krne p notification aayega name fill krne ke liye but name save nhi hoga.
// let firstname=prompt("Enter your firstname");
// console.log("name");
// let firstname=prompt("enter your first name");
// let lastname=prompt("enter your last name");
// console.log("welcome",firstname,lastname,"!");//jb do notification ko mila ke ek baar mai print krna ho tb humlog use kr skte hai.
// let firstname=prompt("enter your first name");
// let lastname=prompt("enter your last name");
// let msg="welcome"+firstname+lastname+"!";
// alert(msg);

// //practice question

// //Q.1.
// let num=25;
// if(num%10===0){
//     console.log("it is a good");
// }
// else{
//     console.log("it is a not good");
// }
// //Q.2.
// let firstname=prompt("usersname");
// let Age=prompt("age");
// console.log("heyy",firstname,Age,"years old");
// let User="heyy"+firstname+Age+"years old";
// alert(User);

// //Q.3.
// let month=3;
// switch(month){
//     case 1:
//         console.log(january);
//         console.log(february);
//         console.log(march);
//         break;
//         case 2:
//         console.log(april);
//         console.log(may);
//         console.log(june);
//         break;
//         case 3:
//             console.log(july);
//         console.log(august);
//         console.log(september);
//         break;
//         case 4:
//             console.log(october);
//             console.log(november);
//             console.log(december);
//             break;
// }
// //Q.4.
// let string='golden string';
// if(string[0]=='A'||string[0]=='a'&&string.length>5){
//     console.log("it is a golden string");
// }
// else{
//     console.log("it is not golden string");
// }
// //Q.5.
// let a=5;
// let b=3;
// let c=10;
// if(a>b){
//     if(a>c){
//         console.log(a,"is largest");
//     }

// else{
//     console.log(c,"is largest");
// }
// }
// else{
//     if(b>c){
//         console.log(b,"is largest");
//     }
//     else{
//         console.log(c,"is largest");
//     }
// }
// //Q.6.
// let n1=32;
// let n2=47852;
// if((n1%10)==(n2%10)){
//     console.log("the last digit having the same" +" "+n1%10);
// }
// else{
//     console.log("the last digit will not have the same");
// }

// //string method

// let msg="  hello  ";
// console.log(msg);
// msg.trim();
// console.log(msg.trim());
// let password=prompt("set your password");
// console.log(password.trim());
// console.log(password);
//               //or
// let password=prompt("set your password");
// let newpass=password.trim();
// console.log(newpass);//jb hum console.log mai (password)denge toh wo phr se pehle jaise hi space ko create krke print krega
// console.log(password);
// let msg="  supriya   ";
// msg.trim();
// console.log(msg.trim());
// let str=msg.trim();
// console.log(str);
// console.log(msg);//pehle space wala msg print hoga jb hum trim hum lgayenge toh space ko remove krdega phr str mai save krnge msg ko aur str ko print krenge toh ye v space ko remove krdega agar phr hum msg ko call krke print krenge toh wo pehle wala nhi krega wo space ko remove krdega.
// //string methods uppercase and lowercase
// let name="supriya jha";
// let newname="samaira";
// console.log(newname.toUppercase());//for uppercase
// console.log(newname.toLowerCase());//for lowercase
// //#string methods with arguments
// let msg="ilovecoding";
// let str=msg.indexOf("love");//jb hume index find krna pde wo string mai rehta hai toh value return 1 krta hai
// console.log(str);
// let str=msg.indexOf("j");//str.indexOf(j);//jb index search kre aur wo na rhe toh value return -1 krta hai
// console.log(str);
// let str=msg.indexOf("o")//jb ek letter ka index find krte hai tb uska value deta hai jis position hota hai index mai
// console.log(str);

// string change method
// let Name="   puppy   ";
// let NewName=Name.trim();
// console.log(NewName);
// NewName=NewName.toUpperCase();
// console.log(NewName);
// usko hum alag likhe h toh ek sath v likh skte hai
// let Name="   puppy   ";
// let NewName=Name.trim().toUpperCase();
// console.log(NewName);

// practice questions
// /Q.1.
// let msg="hello!"
// console.log(msg.toUpperCase());
// /Q.2.
// let name="Apnacollege";
// console.log(name.slice(4,9));
// ///Q.3.
// console.log(name.indexOf("na"));
// ///Q.4.
// console.log(name.replace("Apna","our"));
// console.log(name.slice(4));
// console.log(name.replace("l","t"))
// //jb hume dono l ko replace krna hai t mai tb hum  ek new string bnayenge
// let newstr=name.slice(4).replace('l','t');
// console.log(newstr);
// console.log(newstr.replace('l','t'));//tb humara dono tt hojayega output is cottege
// //or
// console.log(name.slice(4).replace('l','t').replace('l','t'));//ek sath v likh skte h

// ///practice questions
// ///Q.1.
// let months=['jan','july','mar','aug'];
// console.log(months.splice(0,2,'july','jun'));
// console.log(months);
// ///Q.2.
// let language=['c','c++','html','javascript','python','java','c#','sql'];
// console.log(language.reverse());
// console.log(language.indexOf('javascript'));


// function
// function poem(){
//     console.log("Twinkle Twinkle little star");
//     console.log("how i wonder whats you are?");
//     console.log("up above the world so high");
//     console.log("like a diamond in the sky");
// }
// poem();

//practice question
// let random=Math.floor(Math.random()*6)+1;
// console.log("random")

//practive question
// function sum (a,b){
//     console.log(a+b);
// }
// function average(a,b,c){
//     let average=(a+b+c)/3;
//     console.log("average");
// }
// average(3,4,6);
