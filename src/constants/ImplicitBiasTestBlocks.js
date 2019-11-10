import DISPLAY_TYPE from '../constants/TargetCategoryDisplayType';

const IMPLICIT_BIAS_TEST_BLOCKS = {
  blocks: {
    1: {
      numTrials: 20,
      displayType: DISPLAY_TYPE.INCOMPATIBLE_TARGETS_ONLY
    },
    2: {
      numTrials: 20,
      displayType: DISPLAY_TYPE.CATEGORIES
    },
    3: {
      numTrials: 20,
      displayType: DISPLAY_TYPE.INCOMPATIBLE_ALL
    },
    4: {
      numTrials: 40,
      displayType: DISPLAY_TYPE.INCOMPATIBLE_ALL,
      critical: true
    },
    5: {
      numTrials: 20,
      displayTargets: DISPLAY_TYPE.COMPATIBLE_TARGETS_ONLY
    },
    6: {
      numTrials: 20,
      displayType: DISPLAY_TYPE.COMPATIBLE_ALL
    },
    7: {
      numTrials: 40,
      displayType: DISPLAY_TYPE.COMPATIBLE_ALL,
      critical: true
    }
  }
}

export default IMPLICIT_BIAS_TEST_BLOCKS;
