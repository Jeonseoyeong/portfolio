Splitting();
gsap.registerPlugin(ScrollTrigger);

//header
let lastY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y > lastY && y > 50) {
    header.style.transform = "translateY(-120px)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastY = y;
});






    

// main -h1 단어 애니메이션 (스크롤 연동 그대로 유지)
gsap.to(".animated-text .word", {
  opacity: 1,
  y: 0,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// h1 전체 이동 (왼쪽으로 밀기)
gsap.to(".animated-text", {
  x: "-370vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true
  }
});

// sub-text 페이드인 (h1 애니 끝날 무렵 등장)
gsap.fromTo(".sub-text",
  { opacity: 0, y: 50 },   // 시작: 투명 + 아래로 50px
  { 
    opacity: 1,
    y: 0,                  // 끝: 원래 자리
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".animated-text",
      start: "bottom 60%", // h1 애니 끝날 무렵 실행
      toggleActions: "play none none reverse"
    }
  }
);








// question - 아코디언
const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  const btn = item.querySelector('.faq-question');
  const icon = item.querySelector('.faq-icon .lnr');

  btn.addEventListener('click', () => {
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      icon.className = 'lnr lnr-chevron-down';
    } else {
      icon.className = 'lnr lnr-chevron-up';
    }
  });
});
btn.addEventListener('click', () => {
  const answer = item.querySelector('.faq-answer');

  if (item.classList.contains('active')) {
    answer.style.height = answer.scrollHeight + 'px';
  } else {
    answer.style.height = '0px';
  }
});











// video
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".videoWrap",
  { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
  { 
    opacity: 1,
    clipPath: "circle(100% at 50% 50%)",
    ease: "none",
    scrollTrigger: {
      trigger: ".videoSection",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      // markers: true
    }
  }
);



