var a = {
  value: 0,

  valueOf() {
    return ++this.value;
  }
};

if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}