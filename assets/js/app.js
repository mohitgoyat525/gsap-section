const timeLine = gsap.timeline();
const mediaQuery = gsap.matchMedia();

mediaQuery.add("(min-width: 1024.98px)", () => {
  gsap.set(".colors-arrow", { left: "-47%" });
  gsap.set(".next-arrow", { left: "-47%", opacity: 0 });
  gsap.set(".first-text-div", { opacity: 0, top: "58%", left: "47%" });
  gsap.set(".second-text-div", { opacity: 0, top: "58%", left: "47%" });
  gsap.set(".third-text-div", { opacity: 0, top: "58%", left: "47%" });

  ScrollTrigger.create({
    trigger: ".main-section",
    start: "top top",
    end: "300%",
    pin: true,
    animation: timeLine,
    scrub: 2,
  });

  timeLine
    .fromTo(".colors-arrow", { left: "-47%" }, { left: "3%", duration: 4 })
    .fromTo(".first-text-div", { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo(
      ".next-arrow",
      { left: "-47%", opacity: 0 },
      { left: "1%", opacity: 1, duration: 4 }
    )
    .fromTo(".first-text-div", { opacity: 1 }, { opacity: 0, duration: 10 })
    .fromTo(".second-text-div", { opacity: 0 }, { opacity: 1, duration: 15 })
    .fromTo(".second-text-div", { opacity: 1 }, { opacity: 0, duration: 20 })
    .fromTo(".colors-arrow", { left: "3%" }, { left: "5%", duration: 23 })
    .fromTo(".third-text-div", { opacity: 0 }, { opacity: 1, duration: 25 })
    .fromTo(
      ".arrow-text",
      { bottom: "80px" },
      { bottom: "50%", duration: 80 },
      25
    );
});

// Smaller screens (max-width: 1023.98px)
mediaQuery.add("(min-width: 320px) and (max-width: 1024.98px)", () => {
  gsap.set(".first-text-div", {
    opacity: 0,
    top: "50%",
    left: "50%",
    xPercent: -50,
    scale: 0.8,
  });
  gsap.set(".second-text-div", {
    opacity: 0,
    top: "50%",
    left: "50%",
    xPercent: -50,
    scale: 0.8,
  });
  gsap.set(".third-text-div", {
    opacity: 0,
    top: "50%",
    left: "50%",
    xPercent: -50,
    scale: 0.8,
  });
  gsap.set(".arrow-text", { bottom: "20px" });

  const tlMobile = gsap.timeline();
  ScrollTrigger.create({
    trigger: ".main-section",
    start: "top top",
    end: "200%",
    pin: true,
    animation: tlMobile,
    scrub: 2,
  });

  tlMobile
    .fromTo(".first-text-div", { opacity: 0 }, { opacity: 1, duration: 2 })
    .fromTo(".first-text-div", { opacity: 1 }, { opacity: 0, duration: 5 })
    .fromTo(".second-text-div", { opacity: 0 }, { opacity: 1, duration: 5 })
    .fromTo(".second-text-div", { opacity: 1 }, { opacity: 0, duration: 7 })
    .fromTo(".next-arrow", { left: "10%" }, { left: "15%", duration: 10 })
    .fromTo(".third-text-div", { opacity: 0 }, { opacity: 1, duration: 10 })
    .fromTo(
      ".arrow-text",
      { bottom: "20px" },
      { bottom: "30%", duration: 20 },
      10
    );
});
