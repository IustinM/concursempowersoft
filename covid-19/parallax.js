function parallax(element,distance,speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener('scroll',function(){
     parallax('#container1', window.scrollY , 0.5);
    parallax('.adn', window.scrollY , 0.2);
    parallax('.covid', window.scrollY , 0.1);
   

});