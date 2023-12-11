const divideRgbSpectrum = (divisions) => {
  const step = Math.floor(255 / divisions);
  const colors = [];

  for (let i = 0; i < divisions; i++) {
    const red = i * step;
    const green = (divisions - i - 1) * step;
    const blue = 255 - red;

    const hexColor = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
    colors.push(hexColor);
  }

  return colors;
};

const toHex = (value) => {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};
export const showAdvancedOutlines = (levels = 3, intervalDuration = 2000) => {
  const hexStringArray = divideRgbSpectrum(levels);

  function applyOutlines() {
    const wildCardSelector = document.querySelectorAll("*");

    wildCardSelector.forEach((element) => {
      const childCount = element.children.length;
      element.style.outline = "none";

      if (childCount === i) {
        element.style.outline = `1px solid ${hexStringArray[i]}`;
      }
    });
  }

  let i = 0;

  const intervalId = setInterval(() => {
    applyOutlines();
    i = (i + 1) % levels;
  }, intervalDuration);

  return intervalId;
};
