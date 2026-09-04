 function createPhoneNumber(numbers){
  let firstNbrs = numbers.slice(0,3).join('')
  let secondNbrs = numbers.slice(3,6).join('')
  let lastNbrs = numbers.slice(6).join('')

  return `(${firstNbrs}) ${secondNbrs}-${lastNbrs})`
}console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])) //=> result: (123) 456-7890











