import gsap from '../../node_modules/gsap';

export const setBgColor = (color) => {
  const bgs = document.getElementsByClassName('cards__bg--img');

  for (const bg of bgs) {
    gsap.to(bg, { fill: color, duration: 0.2 })
  }
};
