import Color from "color";

export const calcColor = (primaryColor, themeColor, ratio) => {
  return Color(primaryColor).mix(Color(themeColor), ratio).hex();
};
