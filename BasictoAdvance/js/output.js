const one = document.getElementById("demo");
one.addEventListener("click",function(){
    const two = document.getElementsByTagName("p").innerText;
    document.getElementsByTagName("p").innerText = two;
})