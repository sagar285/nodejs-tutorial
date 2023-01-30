const obje ={
    name:"simplyjs",
    age:22,
    address:"indore"
}

const jsondata =JSON.stringify(obje);
console.log(jsondata);
const objedata =JSON.parse(jsondata);
console.log(objedata);