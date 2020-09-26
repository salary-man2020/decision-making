"use strict";

{
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  btn.addEventListener("click",()=>{
    const d = Math.random();
    if(d < 0.95){
      result.classList.remove("break");
      result.classList.add("go");
      result.textContent = "やれ！";
    }else{
      result.classList.remove("go");
      result.classList.add("break");
      result.textContent = "休んでよし。";
    };
  })
}
