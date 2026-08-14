const btn=document.getElementById("missionBtn");

if(btn){

btn.addEventListener("click",function(){

btn.textContent="Claim";

btn.classList.add("clicked-btn");

});

}