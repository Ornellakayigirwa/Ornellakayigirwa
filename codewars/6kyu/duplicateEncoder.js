function duplicateEncode(word){
  let lowerCase = word.toLowerCase().split('')
   let arr =[]
   for(let c of lowerCase){
    if(lowerCase.indexOf(c) === lowerCase.lastIndexOf(c)){
      arr.push("(")
    }else{
      arr.push(")")
    }
   }

return arr.join('')
}
console.log(duplicateEncode('din'))
