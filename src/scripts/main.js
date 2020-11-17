import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.querySelector('.mobile-menu__list').onclick = () => {
  document.querySelector('.header__toggler').checked = false;
};

const points = document.querySelector('.text-block__points');
const pointsAll = document.querySelectorAll('.text-block__point');

points.addEventListener('click', function(event) {
  for (const elem of [...pointsAll]) {
    if (elem.className.includes('text-block__point--active')) {
      elem.className = elem.className.replace('text-block__point--active', '');
    }
  }

  if (event.target.className === 'text-block__points') {
    return;
  }

  event.target.className += ' text-block__point--active';
});

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
      start: 'top top+=80%',
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
    top: 0,
    opacity: 1,
  });

  gsap.to('.pros__blocks', {
    ...getTrigger('.pros__blocks'),
    ...animInfo,
  });

  gsap.to('.pros__img', {
    ...getTrigger('.pros__img'),
    ...animImg,
  });

  gsap.to('.pros__watch-video', {
    ...getTrigger('.pros__watch-video'),
    opacity: 1,
    y: 50,
  });

  gsap.to('.pros__bg', {
    ...getTrigger('.pros__bg'),
    color: '#f8f8f8',
  });

  gsap.to('.text-block__point', {
    ...getTrigger('.text-block__points'),
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
