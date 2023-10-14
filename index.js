var count = 0;

const alertBtn = document.getElementById("alertBtn");
const counter = document.getElementById("count");
const increaseCountBtn = document.getElementById("incCountBtn");
const decreaseCountBtn = document.getElementById("decCountBtn");
const resetCounterBtn = document.getElementById("resetCounterBtn")

window.onload = function(){
    document.getElementById("count").innerHTML = count;
}



alertBtn.addEventListener("click", () => {
    alert("alert!");
});

increaseCountBtn.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
});

decreaseCountBtn.addEventListener("click", () => {
    count--;
    counter.innerHTML = count;
});

resetCounterBtn.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
});





// async funtion getPosts{
//     const posts = await db.find(posts.user === "sherly");
// }