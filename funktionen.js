/* DATENSTRUKTUREN */

/* Primitives */

// let a;  // Definition oder Deklaration 

// a = true;  // boolean (true, false)
// a = "Hallo";    // string 
// a = 10; // number 

// console.log(a);           // Consolenausgabe 
// console.log(typeof a);   // Datentyp ermitteln


/* Arrays */
//let arr = new Array(); 

// let arr; 
// arr = [false,true,false]; //boolean
// arr = ["a", "b", "c","d"]; //string
// arr = [1,2,3];  // number 

// console.log(arr); 
// console.log(arr[0]);  // Index fängt am 0 an zu zählen  
// console.log(arr.length); // länge des Arrays anzeigen lassen

// //letze element ausgeben 
// console.log(arr.length -1);
// console.log(arr[3]);
// console.log(arr[7]);  // =Undefined, JS läst die ausgabe zu weist aber auch undefined hin(Java gibt Fehlermeldung)


/* Array -Info */ 
// let arr = [],
// console.log(arr); // push hängt hinten dran / pop zieht von hinen an ab 
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.pop
// console.log(arr);


/* Objekte */
//  let Obj; 

// obj = {}; 
// console.log(obj);

// obj = {x:10, y:"Hallo", z:true}
// console.log(obj);
// console.log(obj.y); // zugriff auf eine element aus dem Objekt / Punktnotation (dot syntax)= Herachienabstufung

// obj = {
//         val10: "Hello",
//         sub1: {
//                 val1: "Hi",
//                 val2: 2
//               }
//       }
// // {{{ }}}.... nested object 
// console.log(obj);
// console.log(obj.sub1.val1); // wert in einem nested object ausgeben / deep.deeper.deepest
// console.log(obj.val10);


// DOM --> Modell der HTML-Struktur
// DOM --> Document Object Model
// nach dem Parsen / Laden der HTML-Seite 

// console.log(document);  // gibt das kompeltte DOM aus (HTML-Struktur) <HTML>
// console.log(document.body);  // wieder Navigieren durch dot syntax <body>
// console.log(document.body.children);  //<body>.....<body>
// console.log(document.body.children[0]);  // h1
// console.log(document.body.children[0].innerHTML);  // .....Text 
// document.body.children[0].innerHTML = "Hallo";  // DOM manipulation 
// console.log(document.getElementById("test"));  //<p>
// console.log(document.getElementById("test").innerHTML); 


/* Entscheidungsstrukturen */

// let cond; 

// cond = (6 > 4); 
// cond = (6 < 4); 
// cond = (4 == 4);  // Test auf den gleichen Wert
// cond = (4==="4"); //Test auf gleichen wert und Datentyp 

// console.log(cond);

// if (6 >4) {
//     console.log("Aussage wahr");
// } else {
//     console.log("Aussage falsch ");
// }

//if - else if // kann geschachtelt werden mit erweiterungen 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


/* Funktionen */

// 1. Kapselung 
// test();     //Funktionscall 
// function test() 
// {
//     console.log("Testausgabe");    
// }

// 2. return
// console.log(test());  //call  
// function test() {
//     let ausgabe = "Testausgabe";
//     return ausgabe;  //Liefert an die stelle des calls 
//     console.log("Hallo"); // nach return Abbruch! - da nach return ende ist 
// }

// 3. Parameter 
// function test(firstName) {
//     let ausgabe = "Hallo " + firstName + "!"
//     retunr ausgabe; 
// }

// console.log(test("Anna")); // Argument 
// Argumente (Daten)--> Parameter (Platzhalter!)

// 4. Fkt-Call aus Funktionen 

// function test(firstName)  //Parameter
// {
//     let ausgame = grusformel() + firstName + "!";
//     return ausgabe;
// }

// function gurssformel() {
//     return "Hello"
// }

// console.log("Anna");  //Call

//rechner() ...