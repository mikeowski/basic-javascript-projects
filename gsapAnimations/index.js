gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    markers: true,
    end: "bottom bottom",
    scrub: true,
    pin: ".box",
    pinSpace: false,
  },
});

tl.to(".box", {
  x: 400,
})
  .to(".box", {
    x: 100,
    rotate: 180,
  })
  .to(".box", {
    x: 400,
    rotate: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  });
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container2",
    start: "top 50%",
    end: "bottom 60%",
    markers: true,
    pin: ".description",
    scrub: true,
    pinSpace: false,
  },
});
tl2

  .to(".description", {
    x: 200,
    duration: 17,
  })
  .to(".description", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 4,
  });

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container3",
    start: "top 50%",
    end: "bottom 60%",
    scrub: true,
    markers: true,
    pin: ".description2",
  },
});
tl3
  .to(".box2", {
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 4,
  })
  .to(".description2", {
    x: 100,
    duration: 5,
  })
  .to(".description2", {
    x: -100,
    opacity: 0,
    duration: 2,
  });
