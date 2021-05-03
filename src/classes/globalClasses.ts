const commonLinearGradient = `linear-gradient(90deg, #27D6BD 0%, #35C7C5 26.56%, #46B4CE 51.04%, #4BAFD1 72.92%, #698EE2 90.62%, #896AF4 100%)`;
const circularBorderLinearGradient = `linear-gradient(white, white), ${commonLinearGradient}`;

export const globalClasses = {
  circularBorderGradient: (borderSize) => {
    const border = borderSize ? borderSize : "4px";
    return {
      border: `${border} solid transparent`,
      backgroundImage: circularBorderLinearGradient,
      "-moz-border-image": "-moz-linear-gradient",
      "-webkit-border-image": "-webkit-linear-gradient",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    };
  },
};
