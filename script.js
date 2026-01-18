
let tm = gsap.timeline();

tm.from(".fanta", {
  y: -400,
  rotation:"20deg",
  duration: 1.2,
  ease: "bounce.out"
},"a")

tm.from(".img-2", {
  rotation: 60,
  y:-100,
  duration: 1
},"a");
tm.from(".img-3", {
  rotation: 60,
  y:-100,
  duration: 1
},"a");
tm.from(".img-4", {
  rotation: "-20deg",
  y:-200,
  duration: 2
},"a");
tm.from(".img-5", {
  rotation: "-20deg",
  y:-200,
  duration: 2
},"a");

tm.from(".big-leafe", {
  rotation: "30deg",
  y:"-7rem",
  duration: 2
},"a");
gsap.registerPlugin(ScrollTrigger);

var tm2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".benefits",
    scroller: "body",
    scrub: true,
    // markers:true,
    start: "-43% 50%", 
    end: "-43% -70%" 
  }
});

tm2.to(".fanta", {
  y:"170%",
  x:"-65%"
},"a");


tm2.to(".cut-orange", {
  rotation: 150,
  y:"280%",
  x:"-150%"
},"a");


var tm3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card_section",
    scroller: "body",
    scrub: true,
    // markers:true,
    start: "-30% 50%", 
    end: "-30% -60%" 
  }
});
tm3.to(".fanta", {
  y:"385%",
  x:".5%",
  height:"25rem"
},"b");

tm3.to(".cut-orange", {
  y:"480%",
  x:"60",
  height:"19.5rem",
  width:"19.5rem"
},"b");
