function sortArray(array) {
   let countOdds = []
  array.filter((odds,i)=>{
    if(odds % 2 !== 0){
      countOdds.push(odds)
    } 
    countOdds.sort((a,b)=> a - b)          
  })
  let odd = 0
  for (let i = 0;i < array.length;i++){
    if(array[i] % 2 !==0){
    array[i] = countOdds[odd]
    odd++
      }
  }
  return array
}
console.log(sortArray([4,3,2,1]))