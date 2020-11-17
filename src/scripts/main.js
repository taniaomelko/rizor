import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.querySelector('.mobile-menu__list').onclick = () => {
  document.querySelector('.header__toggler').checked = false;
};

const animImg = {
  duration: 0.7,
  ease: 'sine.inOut',
  opacity: 1,
};

const animWatchVideo = {
  duration: 0.5,
  delay: 0.7,
  y: -100,
  opacity: 1,
};

const animInfo = {
  duration: 0.7,
  left: 0,
};

function getTrigger(className) {
  return {
    scrollTrigger: {
      trigger: className,
      start: 'top top+=70%',
    },
  };
};

window.onload = () => {
  gsap.to('.header', {
    y: 100,
  });

  gsap.to('.promo__img', animImg);
  gsap.to('.promo__info', animInfo);

  gsap.to('.promo__watch-video', animWatchVideo);
  gsap.to('.promo__arrow', animWatchVideo);

  gsap.to('.promo__arrow-blue', {
    duration: 0.5,
    delay: 1,
    y: 100,
    opacity: 1,
  });

  gsap.to('.pros__title', {
    ...getTrigger('.pros__title'),
    y: 100,
  });

  gsap.to('.pros__blocks', {
    ...getTrigger('.pros__blocks'),
    ...animInfo,
  });

  gsap.to('.pros__img', {
    ...getTrigger('.pros__img'),
    ...animImg,
  });

  gsap.to('.pros__bg', {
    ...getTrigger('.pros__bg'),
    color: '#f8f8f8',
  });

  gsap.to('.text-block__point', {
    scrollTrigger: {
      trigger: '.text-block__point',
      toggleActions: 'restart pause reverse pause',
      start: 'top top+=70%',
      end: '+=500',
    },
    opacity: 1,
    stagger: { each: 0.1 },
  });

  gsap.to('.characteristics__info', {
    ...getTrigger('.characteristics__info'),
    ...animInfo,
  });

  gsap.to('.characteristics__img', {
    ...getTrigger('.characteristics__img'),
    ...animImg,
  });

  gsap.to('.characteristics__watch-video', {
    ...getTrigger('.characteristics__watch-video'),
    ...animWatchVideo,
  });

  gsap.to('.characteristics__arrow', {
    scrollTrigger: {
      trigger: '.characteristics__arrow',
      start: 'top top+=300',
    },
    ...animWatchVideo,
  });

  gsap.to('.for-whom__info', {
    ...getTrigger('.for-whom__info'),
    ...animInfo,
  });

  gsap.to('.for-whom__img', {
    ...getTrigger('.for-whom__img'),
    ...animImg,
  });
};
