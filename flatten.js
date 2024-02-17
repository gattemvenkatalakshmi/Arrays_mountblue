function  flatten(elements){
     let  flatten_arr =[]; 
    for(let index=0; index<elements.length; index++){
         if(Array.isArray(elements[index])){
           flatten_arr=  flatten_arr.concat(flatten(elements[index]));
       
         }
          else{
              flatten_arr.push(elements[index]);
          }
    }
     return flatten_arr;
}
module.exports = flatten;