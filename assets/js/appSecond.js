const timeLine = gsap.timeline();
const mediaQuery = gsap.matchMedia();

// Set initial states
gsap.set("#img-one", { opacity: 0 });
gsap.set("#img-two", { opacity: 0 });
gsap.set("#img-three", { opacity: 0 });
gsap.set("#img-four", { opacity: 0 });
gsap.set("#img-five", { opacity: 0 });

// Store button references and their normal states
const buttons = [
  "#come-btn",
  "#marketing-btn",
  "#strumenti-btn",
  "#qualifica-btn",
  "#crm-btn",
];

// Function to reset all buttons except the active one
const resetButtons = (exceptBtn) => {
  buttons.forEach((btn) => {
    if (btn !== exceptBtn) {
      gsap.to(btn, {
        backgroundColor: "#7EE49C80",
        rotate: 0,
        duration: 0.3,
      });
    }
  });
};

timeLine
  .to("#img-one", {
    opacity: 1,
    duration: 1,
    onStart: () => {
      gsap.to("#come-btn", {
        backgroundColor: "#53849980",
        rotate: 6,
        duration: 0.3,
      });
      resetButtons("#come-btn");
    },
    onReverseComplete: () => {
      gsap.to("#come-btn", {
        backgroundColor: "#7EE49C80",
        rotate: 0,
        duration: 0.3,
      });
    },
  })
  .to("#img-one", { opacity: 0, duration: 0.5 }, ">")
  .to("#tablet-arrow", { top: "1%", duration: 1 })
  .to(
    "#img-two",
    {
      opacity: 1,
      duration: 1,
      onStart: () => {
        gsap.to("#marketing-btn", {
          backgroundColor: "#53849980",
          rotate: 6,
          duration: 0.3,
        });
        resetButtons("#marketing-btn");
      },
      onReverseComplete: () => {
        gsap.to("#marketing-btn", {
          backgroundColor: "#7EE49C80",
          rotate: 0,
          duration: 0.3,
        });
      },
    },
    "-=0.5"
  )
  .to("#img-two", { opacity: 0, duration: 0.5 }, ">")
  .to("#tablet-arrow", { top: "5%", duration: 1 })
  .to(
    "#img-three",
    {
      opacity: 1,
      duration: 1,
      onStart: () => {
        gsap.to("#strumenti-btn", {
          backgroundColor: "#53849980",
          rotate: 6,
          duration: 0.3,
        });
        resetButtons("#strumenti-btn");
      },
      onReverseComplete: () => {
        gsap.to("#strumenti-btn", {
          backgroundColor: "#7EE49C80",
          rotate: 0,
          duration: 0.3,
        });
      },
    },
    "-=0.5"
  )
  .to("#img-three", { opacity: 0, duration: 0.5 }, ">")
  .to("#tablet-arrow", { top: "7%", duration: 1 })
  .to(
    "#img-four",
    {
      opacity: 1,
      duration: 1,
      onStart: () => {
        gsap.to("#qualifica-btn", {
          backgroundColor: "#53849980",
          rotate: 6,
          duration: 0.3,
        });
        resetButtons("#qualifica-btn");
      },
      onReverseComplete: () => {
        gsap.to("#qualifica-btn", {
          backgroundColor: "#7EE49C80",
          rotate: 0,
          duration: 0.3,
        });
      },
    },
    "-=0.5"
  )
  .to("#img-four", { opacity: 0, duration: 0.5 }, ">")
  .to("#tablet-arrow", { top: "10%", duration: 1 })
  .to(
    "#img-five",
    {
      opacity: 1,
      duration: 1,
      onStart: () => {
        gsap.to("#crm-btn", {
          backgroundColor: "#53849980",
          rotate: 6,
          duration: 0.3,
        });
        resetButtons("#crm-btn");
      },
      onReverseComplete: () => {
        gsap.to("#crm-btn", {
          backgroundColor: "#7EE49C80",
          rotate: 0,
          duration: 0.3,
        });
      },
    },
    "-=0.5"
  );

ScrollTrigger.create({
  trigger: ".main-section",
  start: "top top",
  end: "300%",
  pin: true,
  animation: timeLine,
  scrub: 2,
});
