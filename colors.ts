import {
  bgBrightBlack,
  bgGreen,
  bgYellow,
  bold,
  white,
} from "colors";

const colorMethods = {
  green: bgGreen,
  yellow: bgYellow,
  gray: bgBrightBlack,
};

export function colorLetter(color: "green" | "yellow" | "gray", letter: string) {
  const bg = colorMethods[color];
  const colorizedLetter = bg(bold(` ${white(letter)} `));
  return ` ${colorizedLetter} `;
}