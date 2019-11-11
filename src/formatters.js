export const toTitleCase = (text) => !!text ?
  text
    .split(/[ _]/)
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .reduce((acc, cur) => !acc ? cur : `${acc} ${cur}`, '') :
  text
