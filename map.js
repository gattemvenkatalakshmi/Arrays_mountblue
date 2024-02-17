 function map( elements, cb){
     if(Array.isArray(elements)){
         for(let index =0; index<elements.length; index++){
             elements[index]= cb(elements[index]);
         }
     }
     return  elements 

 }
  module.exports = map;