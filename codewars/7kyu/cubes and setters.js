class Cube{
  constructor(length){
    this.length = length
  }
  get surfaceArea(){
    return 6*(this.length * this.length)
  }
  set surfaceArea(value){
      return this.length = Math.sqrt(value/6)
  }
  
  get volume (){
    return this.length * this.length * this.length
  }
  set volume(volume){
    return this.length = Math.cbrt(volume)
  }
}