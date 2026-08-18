Ornellakayigirwa
function duplicateCount(text){
  let str1 = text.toLowerCase().split('')
    let newStr = []
    let duplicates = new Set()
    for(let i = 0; i < str1.length;i++){
        if(!newStr.includes(str1[i])){
            newStr.push(str1[i])
        }else{
          duplicates.add(str1[i])
        }
    }
    
    return duplicates.size
}