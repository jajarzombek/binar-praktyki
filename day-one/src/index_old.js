// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

console.log("test hello");
// function hello(){
//   console.log("hello ");
// }
// hello();
// ********************* bindowanie
// class Hello {
//   constructor(name){
//     this.name = name;
//     this.print = this.print.bind(this); //przypisanie do instancji danego thisa
//
//   }
//
//   print (){
//     console.log(this.name);
//   }
//
//     printHello (){
//       console.log("Hello");
//     }
// }
//
// let hello = new Hello("hello 1");
// let print = hello.print;
//
// hello.print();
// print();
//hello2.print();
//przyklad jak niezdefiniowane
//print tutaj trzyma referencje do funkcji
//$('#root'.click(hello.print))

//*******************arrow func
//
// const test = (name) =>{
//
// }
//
// const test2 = name => name.toUpperCase();
// console.log(test2("jacek"));
//
// $('#root').click(name = name.toUpperCase());

//*************Laczenie stringow
// const name = "Darek";
// console.log(`hello: ${name}`);

//PRZYKŁADOWA KLASA
// class TestClass {
//   constructor(name){
//     this.name = name;
//     this.print = this.print.bind(this);
//   }
//
//   print(){
//     console.log(`Nazwa tej
//     instancji klasy to:
//     ${this.name}`);
//   }
//
//   //const getSquare = num => num*num;
// }
//
// var klasa = new TestClass("Klasa pierwsza");
// klasa.print();

//var clonedArr = myArr //ten sam obiekt, nie tworzy nowej tablicy
//kopiowenie tablicy
//var cloned = [...myArr]; //zapewni nowa tablice

//var {a,b,...c } = myObject
// class ArrayAppender {
//   constructor(arr){
//     this.myArr = arr;
//     this.append = this.append.bind(this);
//   }
//
//   append(arrToAppend){
//     var appendedArr = [...this.myArr, ...arrToAppend ];
//     return appendedArr;
//   }
// }
//
// class ObjectAppender {
//   constructor(obj){
//     this.myObj = obj;
//     this.append = this.append.bind(this);
//   }
//
//   append(objToAppend){
//     var appendedObj = {...this.myObj, ...objToAppend };
//     return appendedObj;
//   }
// }
//
// class List {
//   constructor(list){
//     this.list = list;
//     this.getSquare = this.getSquare.bind(this);
//   }
//
//   getSquare(){
//     return this.list.map(number => number*number);
//   }
//
//   getHigherThan(number){
//     return this.list.filter(num => num > number);
//   }
//
//   getSum(){
//     return this.list.reduce((a,b) => a + b);
//   }
//
//   // getSum(){
//   //   var result = 0;
//   //   this.list.forEach((i,result) => result + i);
//   //   console.log(result);
//   //   return result;
//   // }
//
//   partyTime(number){
//     // var higher = new List(this.list).getHigherThan(num);
//     // var squared = new List(higher).getSquare();
//     // var summed = new List(squared).getSum();
//     // console.log(summed);
//     // return summed;
//     return this.list.filter(num => num > number)
//       .map(num => num*num)
//       .reduce((a,b) => a+ b);
//   }
//
// }
//
// var lista = new List([1, 5 ,3 ,10]);
// // lista.getHigherThan(2);
// // lista.getSquare();
// // lista.getSum();
// console.log(lista.partyTime(4));

// var appender = new ArrayAppender([1, 2]);
// var objAppender = new ObjectAppender({a: 1, b: 2});
//
// console.log(objAppender.append({c: 3, d: 4}));
// console.log(appender.append([3,4]));
//
// console.log(appender.myArr);
// appender.append([3,4]);
//
// console.log(appender.myArr);


const axios = require('axios');
console.log("przed get");
const response =
  axios.get('http://192.168.10.131:3001/')
  .then(response => {
  console.log("wewnatrz then",response);
}).catch(err => {
  console.log("cos poszlo nie tak");
});
console.log("po get", response);
