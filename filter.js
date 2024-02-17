function filter( elements, cb){
    let arr = [];
    if(Array.isArray(elements)){
        for(let index =0; index<elements.length; index++){
            if (cb(elements[index]) === true) {
                arr.push(elements[index]);
              }
        }
        return arr;
    }
     return 

}
 module.exports = filter;