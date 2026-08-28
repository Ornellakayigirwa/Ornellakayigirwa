function multiplicationTable(size){
    let table = []
    for(let rows = 0; rows < size; rows++){
        let row=[]
        for(let cols = 0;cols < size;cols++){
            row.push((rows+1)*(cols+1))
        }
        table.push(row)
    }
    return table
}

console.log(multiplicationTable(3))
