let img = document.getElementById("dark")

img.onclick = function(){
  document.body.classList.toggle("bod");
  if(document.body.classList.contains("bod")){
    img.src = "/icon/sun.png"
  }else{
    img.src = "/icon/moon.png"
  }
}