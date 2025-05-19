// Description: [Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.]
function countPositivesSumNegatives(input) {
  // check for null or empty array
  if (!input || input.length === 0) {
    return [];
  }
  
  let countPositive = 0;
  let sumNegative = 0;
  
  for(let i = 0; i < input.length; i++){
    if(input[i] > 0){
      countPositive++;
    }
    else if(input[i] < 0){
      sumNegative += input[i];
    }
  }
  return [countPositive, sumNegative];
}