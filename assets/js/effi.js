const timeLine = gsap.timeline();

gsap.set("#content-one", { opacity: 1 });
gsap.set("#content-two", { opacity: 0 });
gsap.set("#content-three", { opacity: 0 });
gsap.set("#content-four", { opacity: 0 });
gsap.set("#content-five", { opacity: 0 });
gsap.set("#content-six", { opacity: 0 });
gsap.set("#img-one", { opacity: 1 });
gsap.set("#img-two", { opacity: 0 });
gsap.set("#effi-content", { opacity: 1 });
gsap.set("#effi-content-two", { opacity: 0 });
gsap.set("#content-counter", { opacity: 1 }); 

const updateCounter = (value) => {
  gsap.to("#content-counter", {
    opacity: 0, // Fade out
    duration: 0.3,
    onComplete: () => {
      gsap.set("#content-counter", { innerHTML: value });
      gsap.to("#content-counter", { opacity: 1, duration: 0.3 }); 
    },
  });
};


timeLine
  .call(updateCounter, ["1/6"])
  .to("#content-one", { opacity: 0, duration: 1 })
  .to("#content-two", { opacity: 1, duration: 1 }, "-=0.5")
  .call(updateCounter, ["2/6"], "-=1")

  .to("#content-two", { opacity: 0, duration: 1 })
  .to("#content-three", { opacity: 1, duration: 1 }, "-=0.5")
  .call(updateCounter, ["3/6"], "-=1")

  .to("#content-three", { opacity: 0, duration: 1 })
  .to("#content-four", { opacity: 1, duration: 1 }, "-=0.5")
  .call(updateCounter, ["4/6"], "-=1")

  .to("#content-four", { opacity: 0, duration: 1 })
  .to("#content-five", { opacity: 1, duration: 1 }, "-=0.5")
  .call(updateCounter, ["5/6"], "-=1")

  .to("#content-five", { opacity: 0, duration: 1 })
  .to("#content-six", { opacity: 1, duration: 1 }, "-=0.5")
  .call(updateCounter, ["6/6"], "-=1")

  .to("#img-one", { opacity: 0, duration: 1 })
  .to("#img-two", { opacity: 1, duration: 1 }, "-=0.5")

  .to("#effi-content", { opacity: 0, duration: 1 })
  .to("#effi-content-two", { opacity: 1, duration: 1 }, "-=0.5");


ScrollTrigger.create({
  trigger: ".main-section",
  start: "top top",
  end: "300%",
  pin: true,
  animation: timeLine,
  scrub: 2,
});
