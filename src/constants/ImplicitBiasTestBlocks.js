import DISPLAY_TYPE from '../constants/TargetCategoryDisplayType';

const IMPLICIT_BIAS_TEST_BLOCKS = {
  0: {
    numTrials: 20,
    displayType: DISPLAY_TYPE.INCOMPATIBLE_TARGETS_ONLY
  },
  1: {
    numTrials: 20,
    displayType: DISPLAY_TYPE.CATEGORIES
  },
  2: {
    numTrials: 20,
    displayType: DISPLAY_TYPE.INCOMPATIBLE_ALL
  },
  3: {
    numTrials: 40,
    displayType: DISPLAY_TYPE.INCOMPATIBLE_ALL,
    critical: true
  },
  4: {
    numTrials: 20,
    displayTargets: DISPLAY_TYPE.COMPATIBLE_TARGETS_ONLY
  },
  5: {
    numTrials: 20,
    displayType: DISPLAY_TYPE.COMPATIBLE_ALL
  },
  6: {
    numTrials: 40,
    displayType: DISPLAY_TYPE.COMPATIBLE_ALL,
    critical: true
  }
}

export default IMPLICIT_BIAS_TEST_BLOCKS;
