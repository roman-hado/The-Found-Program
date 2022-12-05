import {
  doctorBtnColor, doctorBgColor,
  coachBtnColor, coachBgColor,
  appBtnColor, appBgColor,
  medicationBtnColor, medicationBgColor,
  communityBtnColor, communityBgColor,
  defaultBtnColor
} from '../variables.js';

export const getFactorBtnInfo = (factorName) => {
  switch (factorName) {
    case 'doctor-btn':
      return {
        factorCardId: 'doctor-card',
        btnColor: doctorBtnColor,
        bgColor: doctorBgColor
      };

    case 'coach-btn':
      return {
        factorCardId: 'coach-card',
        btnColor: coachBtnColor,
        bgColor: coachBgColor
      };

    case 'app-btn':
      return {
        factorCardId: 'app-card',
        btnColor: appBtnColor,
        bgColor: appBgColor
      };

    case 'medication-btn':
      return {
        factorCardId: 'medication-card',
        btnColor: medicationBtnColor,
        bgColor: medicationBgColor
      };

    case 'community-btn':
      return {
        factorCardId: 'community-card',
        btnColor: communityBtnColor,
        bgColor: communityBgColor
      };

    default:
      return {
        factorCardId: 'doctor-card',
        btnColor: defaultBtnColor,
        bgColor: doctorBgColor
      };
  }
};
