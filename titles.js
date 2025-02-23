const title = document.querySelector('h1')
const links = document.querySelectorAll('section a')
const body = document.querySelector('body')
// const hoverDiv = document.querySelector('.hover-div');

links.forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    title.innerText = link.getAttribute('data-title')

    body.classList.add('hovered')
    link.classList.add('hovered')

    const hoverDiv = links[index].querySelector('.hover-div');
    const hoverImg = links[index].querySelector('img');

    gsap.to(hoverDiv, {
      duration: .1,
      opacity: 1,
      scale: 1,
      ease: "power3.inOut",
    });

    gsap.to(hoverImg, {
      duration: .1,
      scale: 1.1,
      ease: "power1.in",
    });

    // body.classList.add(link.getAttribute('data-color'))
  })

  link.addEventListener('mouseleave', () => {
    title.innerText = 'Take a Photo'

    body.classList.remove('hovered')
    link.classList.remove('hovered')

    const hoverDiv = links[index].querySelector('.hover-div');
    const hoverImg = links[index].querySelector('img');

    gsap.to(hoverDiv, {
      duration: .1,
      opacity: 0,
      scale: .85,
      ease: "power3.inOut",
    });

    gsap.to(hoverImg, {
      duration: .1,
      scale: 1,
      ease: "power1.in",
    });

    // body.classList.remove(link.getAttribute('data-color'))
  })
})