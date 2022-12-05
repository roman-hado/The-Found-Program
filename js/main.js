import { defaultBtnColor, desktopStart } from './variables.js';
import { getFactorBtnInfo } from './utils/getFactorBtnInfo.js';
import { setBgColor } from './utils/setBgColor.js';

const isDesktop = window.innerWidth > desktopStart;
const factorButtons = document.getElementById('factor-buttons').children;
const factorCards = document.getElementById('factor-cards').children;
const activeButtonClass = 'program__button--is-active';
const activeCardClass = 'card--is-active';
let prevActiveButton = factorButtons[0];
let prevActiveCard = factorCards[0];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const removePrevButtonBG = (prevButton) => {
  prevButton.classList.remove(activeButtonClass);
  prevButton.style.backgroundColor = defaultBtnColor;
};

const setButtonBG = (button, color) => {
  button.classList.add(activeButtonClass);
  button.style.backgroundColor = color;
};

const handleChangeColors = (button) => {
  const { bgColor, btnColor } = getFactorBtnInfo(button.id);

  removePrevButtonBG(prevActiveButton);
  setButtonBG(button, btnColor);
  setBgColor(bgColor);
};

const scrollToRegister = (y) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y, offsetY: 100 }
  });
};

const setCardActiveClass = (cardId) => {
  const currentCard = document.getElementById(cardId);

  prevActiveCard.classList.remove(activeCardClass);
  currentCard.classList.add(activeCardClass);

  prevActiveCard = currentCard;
};

for (const button of factorButtons) {
  button.addEventListener('click', () => {
    if (button === prevActiveButton) return;
    const { factorCardId } = getFactorBtnInfo(button.id);

    handleChangeColors(button);

    if (isDesktop) {
      scrollToRegister(`#${factorCardId}`);
    } else {
      setCardActiveClass(factorCardId);
    }

    prevActiveButton = button;
  });
}

for (let i = 0; i < factorCards.length; i++) {
  const card = factorCards[i];

  ScrollTrigger.create({
    trigger: card,
    start: "top 50%",
    end: "end -50%",

    onEnter: () => {
      handleChangeColors(factorButtons[i]);
      prevActiveButton = factorButtons[i];
    },

    onEnterBack: () => {
      handleChangeColors(factorButtons[i]);
      prevActiveButton = factorButtons[i];
    }
  });
}
