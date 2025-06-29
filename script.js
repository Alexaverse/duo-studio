// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
// only when locomotive is used alone and not with scroll trigger
 gsap.registerPlugin(ScrollTrigger);


function init(){


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
init();
var tl = gsap.timeline({
    scrollTrigger:{
         trigger:".page1 h1",
         scroller:"#main",
         markers:false,
         start:"top 27%",
         end:"top 0",
         scrub:3
    }
})
tl.to(".page1 h1" ,{
    x:-100,
    duration: 1,
    
},"anim")
tl.to(".page1 h2",{
    x:100
},"anim")
tl.to(".page1 video",{
    width:"90%"

},"anim")
var tl2 = gsap.timeline({
    scrollTrigger:{
         trigger:".page1 h1",
         scroller:"#main",
         markers:false,
         start:"top -116%",
         end:"top 130",
         scrub:3
    }
})

tl.to('#main',{
    backgroundColor:"#fff"
})