scrolleroffset = document.querySelector('.scroller').offsetHeight;
scrolleroffsetTop = scrolleroffset - window.innerHeight;

document.addEventListener('scroll', ()=> {
 scrollPosition = window.scrollY/100;
 //console.log()

 count = (scrollPosition / scrolleroffsetTop)*100;
 unit = count*100;
 container.style.clipPath = 'circle('+unit+'%)'

})