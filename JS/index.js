let countEle = document.getElementById("count-el");
// console.log(countEle);
let count = 0;
function increment() {
    count = count + 1;
    countEle.innerText = count;
}
function save(){
    console.log(count);
}
save();