const INPUT_KEYS = {
  LEFT: 'E',
  RIGHT: 'I',
  START_KEY: 'space bar'
}

export const getEventKeyForInputKey = (inputKey) => {
  switch(inputKey) {
    case 'E':
      return 'e'
    case 'I':
      return 'i'
    case 'space bar':
      return ' '
    default:
      return null; // unsupported
  }
}

export default INPUT_KEYS
