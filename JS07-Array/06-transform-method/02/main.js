// "background-color" -> ["background", "color", "black"] -> backgroundColorBlack

function firstUc(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function convertToCamel(dashStr) {
  return dashStr
    .split("-")
    .map((el, idx) => (idx ? firstUc(el) : el))
    .join("");
}
