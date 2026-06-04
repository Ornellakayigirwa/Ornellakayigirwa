function getMichaelLastName(inputText){
    let strArr = inputText.replaceAll(",","").replaceAll("?","").replaceAll(".","").replace("-","").split(' ')
     let lastName = []

     for(let i = 0; i < strArr.length -1 ; i++){
        let capName = strArr[i+1][0]

        if(strArr[i]==='Michael' && capName === capName.toUpperCase()){
            lastName.push(strArr[i+1])
        }
     }
     return lastName
}