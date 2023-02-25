module.exports = function check(str, bracketsConfig) {
  while (
    str.length !== 0 &&
    bracketsConfig.some((el) => str.includes(el.join("")))
  ) {
    for (element of bracketsConfig) {
      const stringToCheck = element.join("");
      console.log("s", stringToCheck);
      const regexStr = stringToCheck
        .replace(/\[\]/, "\\[\\]")
        .replace(/\{\}/, "\\{\\}")
        .replace(/\|\|/, "\\|\\|")
        .replace(/\(\)/, "\\(\\)");
      console.log("regexStr", regexStr);
      const regExp = new RegExp(regexStr, "g");

      str = str.replace(regExp, "");
    }
  }
  return str.length === 0;
};
