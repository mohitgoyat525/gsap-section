const timeLine = gsap.timeline();
const mediaQuery = gsap.matchMedia();

  // Initial states
  gsap.set("#img-one", { opacity: 0 });
  gsap.set("#img-two", { opacity: 0 });
  gsap.set("#img-three", { opacity: 0 });
  gsap.set("#img-four", { opacity: 0 });
  gsap.set("#img-five", { opacity: 0 });

  // Create timeline animations
  timeLine
    // Image 1 appears
    .to("#img-one", {
      opacity: 1,
      duration: 1,
      onStart: () =>
        gsap.to("#come-btn", { backgroundColor: "#53849980", duration: 0.3, rotate:6 }),
      onReverseComplete: () =>
        gsap.to("#come-btn", { backgroundColor: "#7EE49C80", duration: 0.3, rotate: 0 }),
    })
    .to("#img-one", { opacity: 0, duration: 0.5 }, ">")
    .to(
      "#img-two",
      {
        opacity: 1,
        duration: 1,
        onStart: () =>
          gsap.to("#marketing-btn", {
            backgroundColor: "#53849980",
            duration: 0.3,
            rotate: 6,
          }),
        onReverseComplete: () =>
          gsap.to("#marketing-btn", {
            backgroundColor: "#7EE49C80",
              duration: 0.3,
            rotate: 0,
          }),
      },
      "-=0.5"
    )
    .to("#img-two", { opacity: 0, duration: 0.5 }, ">")
    .to(
      "#img-three",
      {
        opacity: 1,
        duration: 1,
        onStart: () =>
          gsap.to("#strumenti-btn", {
            backgroundColor: "#53849980",
            duration: 0.3,
            rotate: 6,
          }),
        onReverseComplete: () =>
          gsap.to("#strumenti-btn", {
            backgroundColor: "#7EE49C80",
              duration: 0.3,
            rotate: 0,
          }),
      },
      "-=0.5"
    )
    .to("#img-three", { opacity: 0, duration: 0.5 }, ">")
    .to(
      "#img-four",
      {
        opacity: 1,
        duration: 1,
        onStart: () =>
          gsap.to("#qualifica-btn", {
            backgroundColor: "#53849980",
            duration: 0.3,
            rotate: 6,
          }),
        onReverseComplete: () =>
          gsap.to("#qualifica-btn", {
            backgroundColor: "#7EE49C80",
              duration: 0.3,
            rotate: 0,
          }),
      },
      "-=0.5"
    )
    // Image 4 fades out, Image 5 appears
    .to("#img-four", { opacity: 0, duration: 0.5 }, ">")
    .to(
      "#img-five",
      {
        opacity: 1,
        duration: 1,
        onStart: () =>
          gsap.to("#crm-btn", {
            backgroundColor: "#53849980",
            duration: 0.3,
            rotate: 6,
          }),
        onReverseComplete: () =>
          gsap.to("#crm-btn", { backgroundColor: "#7EE49C80", duration: 0.3, rotate: 0 }),
      },
      "-=0.5"
    );

  // ScrollTrigger setup
  ScrollTrigger.create({
    trigger: ".main-section",
    start: "top top",
    end: "300%",
    pin: true,
    animation: timeLine,
    scrub: 2,
  });


