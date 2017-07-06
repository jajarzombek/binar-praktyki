
// pobranie tagow ze strony i odwrocenie

import axios from 'axios'
//import getSquare from './my_module';
//do nazwanych
import {getSquare, add, divide} from "./my_module";

import List from './list'
// axios.get('http://192.168.10.131:3001/tags')
//   .then((response) => {
//     console.log(response.data.tags.reverse());
//   });

var lista = new List([1, 5 ,3 ,10]);
lista.getHigherThan(2);
lista.getSquare();
lista.getSum();
console.log(lista.partyTime(4));

console.log(getSquare(5));
