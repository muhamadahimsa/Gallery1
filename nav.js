// Nav
const nav = document.querySelector(".nav-wrapper");
const navLinks = document.querySelectorAll(".nav-links");
const isMobile = window.innerWidth < 530;

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav-wrapper");
  const navMenu = document.querySelector(".nav-button");
  const navTop = document.querySelector(".nav-top");
  const navPage = document.querySelectorAll(".nav-page .ofh p");
  const navLink = document.querySelectorAll(".nav-links .ofh p");
  const icon = document.querySelector(".hamburger i");
  const navDisplay = document.querySelector(".nav-display");

  let isOpen = true;

  gsap.set(nav, { height: "3rem" });
  gsap.set(navTop, { display: "none" });
  gsap.set(navPage, { y: "150%" });
  gsap.set(navLink, { y: "150%" });

  nav.addEventListener("click", function () {
    if (isOpen) {
      !isMobile
        ? gsap.to(nav, {
            height: "34.5rem",
            // delay: 0.5,
            duration: 0.75,
            ease: "power4.inOut",
            immediateRender: false,
          })
        : gsap.to(nav, {
            height: "34.5rem",
            // delay: 0.5,
            duration: 0.75,
            ease: "power4.inOut",
            immediateRender: false,
          });

      gsap.to(navTop, {
        duration: 0.1,
        onStart: function () {
          gsap.set(navTop, { display: "flex" });
        },
        delay: 0.5,
        immediateRender: false,
      });

      gsap.to(navPage, {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
        delay: 0.6,
        immediateRender: false,
      });

      gsap.to(navLink, {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
        delay: 0.6,
        immediateRender: false,
      });

      gsap.to(navMenu, {
        duration: 0.5,
        ease: "power4.inOut",
        delay: 0,
        immediateRender: false,
        onComplete: function () {
          icon.className = "ph-light ph-x";
        },
      });

      gsap.to(".nav-button-wrapper span:nth-child(1)", {
        top: "100%",
        ease: "power4.inOut",
        duration: 0.75,
        delay: 0.3,
      });

      gsap.to(".nav-button-wrapper span:nth-child(2)", {
        top: "0%",
        ease: "power4.inOut",
        duration: 0.75,
        delay: 0.3,
      });
    } else {
      gsap.to(nav, {
        height: "3rem",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.2,
        immediateRender: false,
      });

      gsap.to(navTop, {
        duration: 0.1,
        onComplete: function () {
          gsap.set(navTop, { display: "none" });
        },
        delay: 1,
        immediateRender: false,
      });

      gsap.to(navPage, {
        y: "150%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
        immediateRender: false,
      });

      gsap.to(navLink, {
        y: "150%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.075,
        immediateRender: false,
      });

      gsap.to(navMenu, {
        duration: 0.2,
        ease: "power4.inOut",
        immediateRender: false,
        onComplete: function () {
          icon.className = "ph-light ph-list";
        },
      });

      gsap.to(".nav-button-wrapper span:nth-child(1)", {
        top: "0%",
        ease: "power4.inOut",
        duration: 0.75,
        delay: 0.3,
      });

      gsap.to(".nav-button-wrapper span:nth-child(2)", {
        top: "100%",
        ease: "power4.inOut",
        duration: 0.75,
        delay: 0.3,
      });
    }
    isOpen = !isOpen;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const linkItems = document.querySelectorAll(".nav-page");

  linkItems.forEach((item) => {
    const copyElements = item.querySelectorAll(".ofh");

    copyElements.forEach((a) => {
      const copy = a.querySelector("p");

      if (copy) {
        const duplicateCopy = document.createElement("p");
        duplicateCopy.textContent = copy.textContent;
        a.appendChild(duplicateCopy);
      }
    });
  });

  document.querySelectorAll(".nav-page").forEach((item) => {
    item.addEventListener("mouseover", () => {
      mouseOverAnimation(item);
    });

    item.addEventListener("mouseout", () => {
      mouseOutAnimation(item);
    });
  });

  const mouseOverAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "-100%",
      duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "0%",
      duration: 0.3,
    });
  };

  const mouseOutAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "0%",
      duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "100%",
      duration: 0.3,
    });
  };
});