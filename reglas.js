//---------------------------------------------------------------------Variables
// var a = 1;
// console.log(a);
// var a = 2;
// console.log(a);

//---------------------------------------------------------------------let
// let b = 1;
// b = 2
// console.log(b);

//---------------------------------------------------------------------const
// const mySSH = '';
// const utilities = requiere('./requiere') 

//---------------------------------------------------------------------Variables diferencias (en inglés)
// var strLast_Name = 'Tovar';
// var numUser_Age = 33;
// var bntExponencial_Number = 10n;
// var dtBirth_Year = 1989;
// var arrList_of_Programmers = ['Armando', 'Fernando','Jaquelinne'];
// var objProcess_Manager = ({fisrtname : 'Alma', lastname:'Bacernas'});
// var blnExist = true
// console.log(blnExist);

//--------------------------------------------------------------------Funciones con recursividad
// myFunc();
// function myFunc(){
//     console.log("Hola");
// }

//---------------------------------------------------------------------Funciones sin recursividad
// let MyFunc = function(a) {console.log(a);}
// let MyFunc = (name) => {console.log($name)}

//---------------------------------------------------------------------Funciones sin recursividad
// const performSomething = (item) => {
//     //...
//     return item;
// }

// const items = ['a','b','c']
// items.forEach((item) => {
//     performSomething(item)
//     console.log(item);
// })

// const newArray = items.map((item) => performSomething(item))
// const newArray = items.map((item) => console.log(item))
// const newArray = items.map(performSomething)
// console.log(newArray);

//----------------------------------------------------------------------Encontrar un solo elemento en la matriz
// const items = [
//     {name: 'a', content:{/*...*/ }},
//     {name: 'b', content:{/*...*/ }},
//     {name: 'c', content:{/*...*/ }}
// ]
// for (const item of items){
//     if(item.name === 'b'){
//         console.log(item);
//         // return item    
//     }
// }
//----------------------------------------------------------------------Find
// const b = items.find((item) => item.name === 'b');
// console.log(b);
//----------------------------------------------------------------------Filter
// const b = items.filter((item) => item.name === 'b').shift()
// console.log(b);

//----------------------------------------------------------------------Reduce
// const b = items.reduce((result, item) => {
//     if(item.name === 'b') {result = item}
//     console.log(result);
//     // return result
// }, null)


//----------------------------------------------------------------------Reduce
// const items = [
//     {name: 'a', content:{value: 1}},
//     {name: 'b', content:{value: 2}},
//     {name: 'c', content:{value: 3}}
// ]

// // let count = 0
// // for (const item of items){
// //     count += item.content.vale
// // }

// const count = items.reduce((result, {content: {value}}) => result + value, 0)

// console.log(count);


//-----------------------------------------------------------------------Iteración en objetos
// const user = {
//     // name: 'John Doe',
//     // email: 'john.doe@example.com',
//     // age: 25,
//     // dob: '08/02/1989',
//     // active: true
//     };
    

// for (const key in user){
//     console.log(`${key} : ${user[key]}`);
// }

// for (const key in user){
//     if(user.hasOwnProperty(key)){
//         console.log(`${key} : ${user[key]}`);
//     }
// }

//-------------------------------------------------------------------------Metodo Object.keys()
// const courses = {
//     java: 10,
//     javascript: 55,
//     nodejs: 5,
//     php: 15
// };
// //convertir los objetos a matriz(array) de clave
// const keys = Object.keys(courses)
// // console.log(keys);
// //Iterar sobre el objeto

// keys.forEach((key, index) => {
//     console.log(`${key}: ${courses[key]}`);
// })


//-------------------------------------------------------------------------Metodo Object.values()
// const animals = {
//     tiger: 1,
//     cat: 2,
//     monkey: 3, 
//     elephant: 4
// };
// Object.values(animals).forEach(val => console.log(val));

//-------------------------------------------------------------------------Metodo Object.entries()
// const entries = Object.entries(animals);
// console.log(entries);

//for...of
// for (const [key, value] of Object.entries(animals)){
//     console.log(`${key}: ${value}`);
// }

//forEach
// Object.entries(animals).forEach(([key, value]) => {
//     console.log(`${key}:${value}`)
// });

//---------------------------------------------------------------------------Herencia prototipos
hacerAlgo();

function hacerAlgo(){}
console.log(hacerAlgo.prototype);

// var hacerAlgo = function (){};
// console.log(hacerAlgo.prototype);

// function hacerAlgo(){}
// hacerAlgo.prototype.foo = "bar";
// console.log(hacerAlgo.prototype);

// function hacerAlgo(){
//     hacerAlgo.prototype.foo = "bar"; //Propiedad a prototipo
//     var hacerUnaNuevaInstancia = new hacerAlgo();
//     hacerUnaNuevaInstancia.prop = "un valor"; //añade propiedad a un objeto
//     console.log(hacerUnaNuevaInstancia);
// };