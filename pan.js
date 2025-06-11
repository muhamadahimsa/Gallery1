const section = document.querySelector('section')

let aimX = 0.5
let aimY = 0.5
let currentX = 0.5
let currentY = 0.5

const move = (event) => {
  aimX = event.pageX / window.innerWidth
  aimY = event.pageY / window.innerHeight
}

const tween = (event) => {
  currentX = currentX + (aimX - currentX) * 0.01
  currentY = currentY + (aimY - currentY) * 0.01

  const sx = section.clientWidth - window.innerWidth
  const sy = section.clientHeight - window.innerHeight

  section.style.transform = `translate(${-1 * sx * currentX}px, ${-1 * sy * currentY}px)`

  requestAnimationFrame(tween)
}

tween()
document.addEventListener('mousemove', move)

const infoBtn = document.querySelector('.nav-info');
const info = document.querySelector('.infos');
const closeBtn = document.querySelector('.info-close');

gsap.set('.info-contact .ofh p', { translateY: '70px'})
gsap.set('.award p', { translateY: '70px'});
const splitText = new SplitType(".info-bio p", {
  types: "lines",
  lineClass: "line",
});

splitText.lines.forEach((line) => {
  const text = line.innerHTML;
  line.innerHTML = `<span style="display: block; transform: translateY(70px);">${text}</span>`;
});

infoBtn.addEventListener('click', function () {
  gsap.to(info, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 1,
    ease: 'power4.inOut',
  })

  gsap.to('.info-contact .ofh p', {
    translateY: '0px',
    delay: .8,
    duration: 1,
    ease: 'power3.out',
  })

  gsap.to('.award p', {
    translateY: '0px',
    delay: .8,
    duration: 1,
    ease: 'power3.out',
    stagger: .05,
  })

  gsap.to('.info-bio p .line span', {
    translateY: '0px',
    delay: .8,
    duration: 1,
    stagger: .07,
    ease: 'power3.out',
  })
})

closeBtn.addEventListener('click', function () {
  gsap.to(info, {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    duration: 1,
    ease: 'power4.inOut',
  })

  gsap.to('.info-contact .ofh p', {
    translateY: '70px',
    duration: 1,
    ease: 'power3.out',
  })

  gsap.to('.award p', {
    translateY: '70px',
    duration: 1,
    ease: 'power3.out',
    stagger: .02,
  })

  gsap.to('.info-bio p .line span', {
    translateY: '70px',
    duration: 1,
    ease: 'power3.out',
  })
})