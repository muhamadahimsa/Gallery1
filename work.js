gsap.registerPlugin(ScrollTrigger);
let lenis;

const infoBtn = document.querySelector(".nav-info");
const info = document.querySelector(".infos");
const closeBtn = document.querySelector(".info-close");

gsap.set(".info-contact .ofh p", { translateY: "70px" });
gsap.set(".award p", { translateY: "70px" });
const splitText = new SplitType(".info-bio p", {
  types: "lines",
  lineClass: "line",
});

splitText.lines.forEach((line) => {
  const text = line.innerHTML;
  line.innerHTML = `<span style="display: block; transform: translateY(70px);">${text}</span>`;
});

infoBtn.addEventListener("click", function () {
  gsap.to(info, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1,
    ease: "power4.inOut",
  });

  gsap.to(".info-contact .ofh p", {
    translateY: "0px",
    delay: 0.8,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".award p", {
    translateY: "0px",
    delay: 0.8,
    duration: 1,
    ease: "power3.out",
    stagger: 0.05,
  });

  gsap.to(".info-bio p .line span", {
    translateY: "0px",
    delay: 0.8,
    duration: 1,
    stagger: 0.07,
    ease: "power3.out",
  });
});

closeBtn.addEventListener("click", function () {
  gsap.to(info, {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 1,
    ease: "power4.inOut",
  });

  gsap.to(".info-contact .ofh p", {
    translateY: "70px",
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".award p", {
    translateY: "70px",
    duration: 1,
    ease: "power3.out",
    stagger: 0.02,
  });

  gsap.to(".info-bio p .line span", {
    translateY: "70px",
    duration: 1,
    ease: "power3.out",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const numberOfImages = 10;
  const minimap = document.querySelector(".minimap .preview");
  const fullSizeContainer = document.querySelector(".images");

  function getRandomLeft() {
    const values = [-15, -7.5, 0, 7.5, 15];
    return values[Math.floor(Math.random() * values.length)] + "px";
  }

  minimap.innerHTML = "";
  fullSizeContainer.innerHTML = "";

  let activeThumbnail = null;

  for (let i = 1; i <= numberOfImages; i++) {
    const randomLeft = getRandomLeft();
    const imagePath = `./Images/Bali/${i}.jpg`;

    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "img-thumbnail";
    // thumbnailDiv.style.left = randomLeft;
    const imgThumbnail = document.createElement("img");
    imgThumbnail.src = imagePath;
    thumbnailDiv.appendChild(imgThumbnail);
    minimap.appendChild(thumbnailDiv);

    const imgDiv = document.createElement("div");
    imgDiv.className = "img";
    // imgDiv.style.left = randomLeft;
    const imgFull = document.createElement("img");
    imgFull.src = imagePath;
    imgDiv.appendChild(imgFull);
    fullSizeContainer.appendChild(imgDiv);

    ScrollTrigger.create({
      trigger: imgDiv,
      start: "top center",
      end: "bottom center",
      onToggle: (self) => {
        if (self.isActive) {
          if (activeThumbnail && activeThumbnail !== thumbnailDiv) {
            animateThumbnail(activeThumbnail, false);
          }

          animateThumbnail(thumbnailDiv, true);
          activeThumbnail = thumbnailDiv;
        } else if (activeThumbnail === thumbnailDiv) {
          animateThumbnail(thumbnailDiv, false);
        }
      },
    });
  }

  function animateThumbnail(thumbnail, isActive) {
    gsap.to(thumbnail, {
      // border: isActive ? "1px solid #000" : "none",
      opacity: isActive ? 1 : 0.5,
      zIndex: isActive ? 100 : 100,
      duration: 0.3,
    });
  }

  const imgAnchors = document.querySelectorAll(".img-thumbnail");
  const imageRows = document.querySelectorAll(".img");

  const addEventListeners = () => {
    imgAnchors.forEach((anchor, index) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        lenis.scrollTo(imageRows[index], {
          offset: 0,
          lerp: 0.05,
        });
      });
    });
  };

  const initLenis = () => {
    lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    lenis.scrollTo(0, { immediate: true });
    initScrollTrigger();
  };

  const initScrollTrigger = () => {
    const hero = document.querySelector(".hero");
    const images = document.querySelectorAll(".img img");

    gsap.utils.toArray(images).forEach((image) => {
      gsap.set(image, { scale: 1.2 });

      const imageRect = image.getBoundingClientRect();
      const heightDifference =
        imageRect.height - image.parentElement.offsetHeight;

      gsap.fromTo(
        image,
        {
          y: -heightDifference,
        },
        {
          scrollTrigger: {
            trigger: image,
            start: "top center+=30%",
            end: "bottom+=10% top",
            scrub: true,
          },
          y: heightDifference,
          ease: "none",
        }
      );
    });
  };

  window.onload = () => {
    initLenis();
    addEventListeners();
  };
});
