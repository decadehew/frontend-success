// 事件泡沫
document.querySelector(".bubble-phase button").addEventListener("click",function(){
    alert("button");
},false);

document.querySelector(".bubble-phase #third").addEventListener("click",function(){
    alert("third");
},false);

document.querySelector(".bubble-phase #second").addEventListener("click",function(){
    alert("second");
},false);        

document.querySelector(".bubble-phase #first").addEventListener("click",function(){
    alert("first");
},false);

// 事件捕獲
document.querySelector(".capture-phase button").addEventListener("click",function(){
    alert("button");
},true);

document.querySelector(".capture-phase #third").addEventListener("click",function(){
    alert("third");
},true);

document.querySelector(".capture-phase #second").addEventListener("click",function(){
    alert("second");
},true);        

document.querySelector(".capture-phase #first").addEventListener("click",function(){
    alert("first");
},true);

/* 事件委託 */
var ul = document.querySelector('.all');
ul.addEventListener('click', function(e) {
    alert(e.target.textContent);
})
