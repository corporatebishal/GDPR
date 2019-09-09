window.createDiv=function(){
    var element=document.createElement("div");
    element.classList.add();
    return element;
  }
    
  window.createCircle=function(){
    var element=document.createElement("div");
    element.classList.add("circle");
    return element;
  }
  window.createSpan=function(){
    var element=document.createElement("span");
    return element;
  }
  
  window.createButton=function(text){
    var element=document.createElement("button");
    element.textContent=text;
    return element;
  }
  
  window.createA=function(src,text){
    var element=document.createElement("a");
    element.textContent=text;
    element.setAttribute("href",src);
    return element;
  }
  
  window.createI=function(className,clickAction){
    var element=document.createElement("i");
    element.setAttribute("class",className);
    element.setAttribute("onclick",clickAction);
    return element;
  }
  
  window.createP=function(text){
    var element=document.createElement("p");
    element.textContent=text;
    return element;
  }
  
  window.createIMG=function(src){
    var element=document.createElement("img");
    element.src=src;
    return element;
  }
  
  
  window.createBreak=function(){
    var element=document.createElement("br");
    return element;
  }
