const navSlide = () =>{
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const nav = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click' , () =>{
        navLinks.classList.toggle('nav-active');
        //animate links
        nav.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation=` navLinkFade 0.5s ease forwards ${index/7+0.8}s`;
            }
        });
        burger.classList.toggle('toggle');
    });


}
function parallax(element,distance,speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener('scroll',function(){
     parallax('#container1', window.scrollY , 0.5);
    parallax('.adn', window.scrollY , 0.2);
    parallax('.covid', window.scrollY , 0.1);
   

});

navSlide();